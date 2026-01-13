import React, { useState, useRef, useEffect } from 'react';
import { MessageCircleIcon, XIcon, SendIcon, SparklesIcon } from './Icons';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '你好！我是 NomadGuide，你的專屬露營顧問。🏕️ 準備去哪裡探險？我可以幫你挑選合適的帳篷喔！', timestamp: new Date() }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMsg: ChatMessage = {
      role: 'user',
      text: inputText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      // Prepare history for API (map internal type to simple object)
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      const responseText = await sendMessageToGemini(history, userMsg.text);

      const aiMsg: ChatMessage = {
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl border border-stone-100 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-brand-700 p-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2 text-white">
              <div className="p-1.5 bg-brand-600 rounded-lg">
                <SparklesIcon className="w-4 h-4 text-brand-200" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">NomadGuide AI</h3>
                <p className="text-xs text-brand-200">在線中 • 隨時為您服務</p>
              </div>
            </div>
            <button onClick={toggleChat} className="text-brand-200 hover:text-white transition-colors">
              <XIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50 scrollbar-hide">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-stone-900 text-white rounded-br-none' 
                      : 'bg-white border border-stone-200 text-stone-800 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-stone-200 p-3 rounded-2xl rounded-bl-none shadow-sm flex gap-1 items-center">
                  <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-stone-100 shrink-0">
            <div className="flex items-center gap-2 bg-stone-50 rounded-full px-4 py-2 border border-stone-200 focus-within:border-brand-500 focus-within:ring-1 focus-within:ring-brand-500 transition-all">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="問問看：適合4個人的帳篷..."
                className="flex-1 bg-transparent outline-none text-sm text-stone-800 placeholder-stone-400"
              />
              <button 
                onClick={handleSendMessage} 
                disabled={isLoading || !inputText.trim()}
                className="p-2 bg-brand-600 rounded-full text-white hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <SendIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={toggleChat}
        className={`p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 ${
          isOpen ? 'bg-stone-200 text-stone-600' : 'bg-brand-600 text-white hover:bg-brand-700'
        }`}
      >
        {isOpen ? <XIcon className="w-6 h-6" /> : <MessageCircleIcon className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default AIChat;
