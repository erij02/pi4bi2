import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

interface ChatBotResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class ChatBotService {
  private apiUrl = 'https://api.deepseek.com/v1/chat/completions';
  private apiKey = 'sk-ea124c0171ed48b09a8c83e12c795f7c';

  constructor(private http: HttpClient) {}

  getChatResponse(userInput: string, context: any[] = [], role: string = 'customer'): Observable<string> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json'
    });

    const systemPrompt = `I am DealDynamo, your intelligent assistant for price comparison. I help you find the best offers in both retail (MG, Géant, Carrefour) and tourism (Touring, Traveltodo, Tunisiebooking). I analyze prices, quality, and reviews in real-time to save you time and money. I always respond in two or three sentences, no more. If you ask something outside the scope of our project, I’ll gently remind you that DealDynamo is focused on price comparison—but I’ll still give you a brief answer.
    ${role === 'sales-manager' ? "As a Sales Manager, I will assist you with product data and pricing strategies." : "As a Customer, I will guide you through the best deals and offers based on your shopping or travel preferences."}
    Current Date: ${new Date().toLocaleDateString()}
    Platform Status: Operational
    `;

    const messages = [
      { role: 'system', content: systemPrompt },
      ...context.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text
      })),
      { role: 'user', content: userInput }
    ];

    const body = {
      model: 'deepseek-chat',
      messages: messages,
      temperature: 0.6,
      max_tokens: 250
    };

    return this.http.post<ChatBotResponse>(this.apiUrl, body, { headers }).pipe(
      map(response => {
        const content = response.choices[0]?.message?.content ?? '';
        return this.formatResponse(content);
      }),
      catchError(() => of("Our support system is temporarily unavailable. Please email support@gamemax.com"))
    );
  }

  private formatResponse(response: string): string {
    if (!/\n\d\)/.test(response)) {
      return `${response}\n\nWhat would you like to do next?\n1) Ask another question\n2) End chat`;
    }
    return response;
  }
}
