<?php
namespace App\Controller\Api;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\ChatbotService;
use Symfony\Component\Security\Core\Security;

class ChatbotController extends AbstractController
{
    #[Route('/chatbot', name: 'api_chatbot', methods: ['POST'])]
    public function chatbot(Request $request, ChatbotService $chatbotService, Security $security): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $message = $data['message'] ?? '';

        $user = $security->getUser(); // ou null si non connecté

        $response = $chatbotService->getChatbotResponse($message, $user);

        return new JsonResponse(['response' => $response]);
    }
}