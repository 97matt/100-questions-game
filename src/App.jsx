import { useState, useEffect } from "react";
import "./App.css";
import { FaDice, FaTrash, FaList } from "react-icons/fa";

function App() {
  const [language, setLanguage] = useState("english");
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [completedQuestions, setCompletedQuestions] = useState(new Set());
  const [isRolling, setIsRolling] = useState(false);
  const [showDice, setShowDice] = useState(false);

  // Complete questions data with numbers
  const questions = {
    english: [
      "1. What is the moment in your life that changed you the most?",
      "2. If you could relive one day, exactly as it was, which would you choose?",
      "3. What's one belief you hold that most people disagree with?",
      "4. When was the last time you felt truly at peace?",
      "5. Do you think people can really change, or do they just reveal more of who they are?",
      "6. What's the hardest lesson life has taught you so far?",
      "7. If you could ask God or the universe one question and get an answer, what would it be?",
      "8. What's your definition of love?",
      "9. Have you ever felt destiny guiding you?",
      "10. What is your biggest fear about relationships?",
      "11. What's the most important value you want to pass on to your children?",
      "12. Do you believe in soulmates?",
      "13. What do you think happens when we die?",
      "14. If you could undo one decision, which would it be?",
      "15. What's something you've never told anyone?",
      "16. Do you think suffering has meaning?",
      "17. What role does forgiveness play in your life?",
      "18. What is your greatest strength?",
      "19. What is your greatest weakness?",
      "20. Who has been the most influential person in your life?",
      "21. Do you believe we choose our families before we are born?",
      "22. What's one habit that changed your life for the better?",
      "23. If you could see one truth about the future, what would you want to know?",
      "24. What is loyalty to you?",
      "25. What makes you feel truly safe with someone?",
      "26. Do you think everything happens for a reason?",
      "27. What's the most spiritual experience you've ever had?",
      "28. Do you believe in signs and synchronicities?",
      "29. What would you sacrifice for love?",
      "30. What kind of legacy do you want to leave behind?",
      "31. If you could erase one memory, would you?",
      "32. What's the biggest risk you've ever taken?",
      "33. Do you think people are born good or evil?",
      "34. What does freedom mean to you?",
      "35. What are you most grateful for right now?",
      "36. Do you believe in past lives?",
      "37. If you could talk to your younger self, what would you say?",
      "38. What is your relationship with silence?",
      "39. Do you believe dreams carry messages?",
      "40. What's the most powerful lesson love has taught you?",
      "41. What scares you the most about the future?",
      "42. If you could heal one wound from your past, what would it be?",
      "43. What makes a home feel like home to you?",
      "44. Do you think people meet by accident or by design?",
      "45. What's the hardest truth you've had to accept?",
      "46. If you could only keep one memory for the rest of your life, which would it be?",
      "47. What role does faith play in your life?",
      "48. What is the deepest pain you've ever felt?",
      "49. What is the purest joy you've ever felt?",
      "50. Do you think love is a choice or a force beyond control?",
      "51. What's the kindest thing someone has ever done for you?",
      "52. What's the kindest thing you've ever done for someone else?",
      "53. When do you feel most connected to the universe?",
      "54. What's a moment in nature that took your breath away?",
      "55. Do you believe animals have souls?",
      "56. What's your biggest dream for your future?",
      "57. What do you want people to remember about you when you're gone?",
      "58. Who in your family do you feel closest to, and why?",
      "59. What's one fear you've overcome that you're proud of?",
      "60. Do you believe love can heal?",
      "61. What do you think your purpose in life is?",
      "62. If you could master any skill instantly, what would it be?",
      "63. When do you feel the most confident?",
      "64. What do you think your soul has lived through before this life?",
      "65. Do you think people are tested by the universe?",
      "66. What makes you feel most alive?",
      "67. Who do you trust the most in your life?",
      "68. Do you think we attract people who mirror our wounds?",
      "69. What part of yourself are you still learning to love?",
      "70. What does intimacy mean to you beyond the physical?",
      "71. Do you believe prayers or intentions are heard?",
      "72. What's a song or piece of art that changed you?",
      "73. What's one promise you've made to yourself?",
      "74. When do you feel the most vulnerable?",
      "75. What do you think is the greatest illusion in life?",
      "76. Do you believe in miracles?",
      "77. If you could spend one hour with anyone from history, who would it be?",
      "78. What does strength mean to you?",
      "79. What's a truth you've learned that hurt at first but freed you later?",
      "80. Do you think two people can be destined to meet?",
      "81. What is the biggest sacrifice you've made for someone?",
      "82. What do you think is the biggest challenge humanity faces?",
      "83. How do you define happiness?",
      "84. What's a dream you haven't told anyone?",
      "85. Do you believe souls recognize each other across lifetimes?",
      "86. What's one quality you admire most in people?",
      "87. If you could relive one relationship differently, which would it be?",
      "88. What's something that instantly inspires you?",
      "89. Do you believe in guardian angels or guides?",
      "90. What does commitment mean to you?",
      "91. What do you want your partner to feel when they're with you?",
      "92. What's a fear you're still trying to conquer?",
      "93. Do you think every love teaches us something?",
      "94. What kind of energy do you want to bring into a room?",
      "95. If you had to describe your soul in three words, which would you choose?",
      "96. Do you believe that pain makes us wiser?",
      "97. What's one thing you've learned about love from your parents or family?",
      "98. What makes you feel most respected?",
      "99. Do you believe destiny and free will can exist together?",
      "100. What does eternal love mean to you?",
    ],
    spanish: [
      "1. ¿Cuál es el momento en tu vida que más te cambió?",
      "2. Si pudieras revivir un día exactamente como fue, ¿cuál elegirías?",
      "3. ¿Cuál es una creencia que tienes con la que la mayoría de la gente no está de acuerdo?",
      "4. ¿Cuándo fue la última vez que te sentiste verdaderamente en paz?",
      "5. ¿Crees que las personas realmente pueden cambiar, o simplemente revelan más de quiénes son?",
      "6. ¿Cuál es la lección más difícil que la vida te ha enseñado hasta ahora?",
      "7. Si pudieras hacerle una pregunta a Dios o al universo y obtener una respuesta, ¿cuál sería?",
      "8. ¿Cuál es tu definición del amor?",
      "9. ¿Alguna vez has sentido que el destino te guiaba?",
      "10. ¿Cuál es tu mayor miedo sobre las relaciones?",
      "11. ¿Cuál es el valor más importante que quieres transmitir a tus hijos?",
      "12. ¿Crees en las almas gemelas?",
      "13. ¿Qué crees que pasa cuando morimos?",
      "14. Si pudieras deshacer una decisión, ¿cuál sería?",
      "15. ¿Hay algo que nunca le has contado a nadie?",
      "16. ¿Crees que el sufrimiento tiene significado?",
      "17. ¿Qué papel juega el perdón en tu vida?",
      "18. ¿Cuál es tu mayor fortaleza?",
      "19. ¿Cuál es tu mayor debilidad?",
      "20. ¿Quién ha sido la persona más influyente en tu vida?",
      "21. ¿Crees que elegimos a nuestras familias antes de nacer?",
      "22. ¿Cuál es un hábito que cambió tu vida para mejor?",
      "23. Si pudieras ver una verdad sobre el futuro, ¿qué te gustaría saber?",
      "24. ¿Qué es la lealtad para ti?",
      "25. ¿Qué te hace sentir verdaderamente seguro con alguien?",
      "26. ¿Crees que todo pasa por una razón?",
      "27. ¿Cuál es la experiencia más espiritual que has tenido?",
      "28. ¿Crees en las señales y sincronicidades?",
      "29. ¿Qué sacrificarías por amor?",
      "30. ¿Qué tipo de legado quieres dejar atrás?",
      "31. Si pudieras borrar un recuerdo, ¿lo harías?",
      "32. ¿Cuál es el riesgo más grande que has tomado?",
      "33. ¿Crees que las personas nacen buenas o malas?",
      "34. ¿Qué significa la libertad para ti?",
      "35. ¿Por qué estás más agradecido en este momento?",
      "36. ¿Crees en las vidas pasadas?",
      "37. Si pudieras hablar con tu yo más joven, ¿qué le dirías?",
      "38. ¿Cuál es tu relación con el silencio?",
      "39. ¿Crees que los sueños llevan mensajes?",
      "40. ¿Cuál es la lección más poderosa que el amor te ha enseñado?",
      "41. ¿Qué te asusta más sobre el futuro?",
      "42. Si pudieras sanar una herida de tu pasado, ¿cuál sería?",
      "43. ¿Qué hace que un hogar se sienta como hogar para ti?",
      "44. ¿Crees que las personas se conocen por accidente o por diseño?",
      "45. ¿Cuál es la verdad más difícil que has tenido que aceptar?",
      "46. Si solo pudieras conservar un recuerdo por el resto de tu vida, ¿cuál sería?",
      "47. ¿Qué papel juega la fe en tu vida?",
      "48. ¿Cuál es el dolor más profundo que has sentido?",
      "49. ¿Cuál es la alegría más pura que has sentido?",
      "50. ¿Crees que el amor es una elección o una fuerza más allá del control?",
      "51. ¿Cuál es la cosa más amable que alguien ha hecho por ti?",
      "52. ¿Cuál es la cosa más amable que has hecho por alguien más?",
      "53. ¿Cuándo te sientes más conectado con el universo?",
      "54. ¿Cuál es un momento en la naturaleza que te quitó el aliento?",
      "55. ¿Crees que los animales tienen alma?",
      "56. ¿Cuál es tu mayor sueño para tu futuro?",
      "57. ¿Qué quieres que la gente recuerde de ti cuando te hayas ido?",
      "58. ¿Con quién de tu familia te sientes más cercano, y por qué?",
      "59. ¿Cuál es un miedo que has superado del que te sientes orgulloso?",
      "60. ¿Crees que el amor puede sanar?",
      "61. ¿Cuál crees que es tu propósito en la vida?",
      "62. Si pudieras dominar cualquier habilidad instantáneamente, ¿cuál sería?",
      "63. ¿Cuándo te sientes más confiado?",
      "64. ¿Qué crees que tu alma ha vivido antes de esta vida?",
      "65. ¿Crees que las personas son probadas por el universo?",
      "66. ¿Qué te hace sentir más vivo?",
      "67. ¿A quién confías más en tu vida?",
      "68. ¿Crees que atraemos personas que reflejan nuestras heridas?",
      "69. ¿Qué parte de ti mismo sigues aprendiendo a amar?",
      "70. ¿Qué significa la intimidad para ti más allá de lo físico?",
      "71. ¿Crees que las oraciones o intenciones son escuchadas?",
      "72. ¿Cuál es una canción o pieza de arte que te cambió?",
      "73. ¿Cuál es una promesa que te has hecho a ti mismo?",
      "74. ¿Cuándo te sientes más vulnerable?",
      "75. ¿Cuál crees que es la mayor ilusión en la vida?",
      "76. ¿Crees en los milagros?",
      "77. Si pudieras pasar una hora con alguien de la historia, ¿quién sería?",
      "78. ¿Qué significa la fuerza para ti?",
      "79. ¿Cuál es una verdad que aprendiste que dolió al principio pero te liberó después?",
      "80. ¿Crees que dos personas pueden estar destinadas a conocerse?",
      "81. ¿Cuál es el mayor sacrificio que has hecho por alguien?",
      "82. ¿Cuál crees que es el mayor desafío que enfrenta la humanidad?",
      "83. ¿Cómo defines la felicidad?",
      "84. ¿Cuál es un sueño que no le has contado a nadie?",
      "85. ¿Crees que las almas se reconocen entre sí a través de las vidas?",
      "86. ¿Cuál es una cualidad que admiras más en las personas?",
      "87. Si pudieras revivir una relación de manera diferente, ¿cuál sería?",
      "88. ¿Qué es algo que te inspira instantáneamente?",
      "89. ¿Crees en los ángeles guardianes o guías?",
      "90. ¿Qué significa el compromiso para ti?",
      "91. ¿Qué quieres que sienta tu pareja cuando esté contigo?",
      "92. ¿Cuál es un miedo que sigues tratando de conquistar?",
      "93. ¿Crees que cada amor nos enseña algo?",
      "94. ¿Qué tipo de energía quieres traer a una habitación?",
      "95. Si tuvieras que describir tu alma en tres palabras, ¿cuáles elegirías?",
      "96. ¿Crees que el dolor nos hace más sabios?",
      "97. ¿Qué es una cosa que has aprendido sobre el amor de tus padres o familia?",
      "98. ¿Qué te hace sentir más respetado?",
      "99. ¿Crees que el destino y el libre albedrío pueden existir juntos?",
      "100. ¿Qué significa el amor eterno para ti?",
    ],
  };

  // UI Translations
  const translations = {
    english: {
      title: "100 Questions Game",
      questionsRemaining: "Questions remaining",
      generateQuestion: "Generate Question",
      rolling: "Rolling...",
      resetGame: "Reset Game",
      showAllQuestions: "Show All Questions",
      hideAllQuestions: "Hide All Questions",
      rollingDice: "Rolling the dice...",
      question: "Question",
      complete: "Complete",
      cancel: "Cancel",
      noMoreQuestions:
        "No more questions available! Click Reset to start over.",
      resetConfirm:
        "Are you sure you want to reset the game? This will restore all 100 questions.",
      allQuestions: "All Questions",
      remaining: "remaining",
    },
    spanish: {
      title: "Juego de 100 Preguntas",
      questionsRemaining: "Preguntas restantes",
      generateQuestion: "Generar Pregunta",
      rolling: "Tirando...",
      resetGame: "Reiniciar Juego",
      showAllQuestions: "Mostrar Todas las Preguntas",
      hideAllQuestions: "Ocultar Todas las Preguntas",
      rollingDice: "Tirando el dado...",
      question: "Pregunta",
      complete: "Completar",
      cancel: "Cancelar",
      noMoreQuestions:
        "¡No hay más preguntas disponibles! Haz clic en Reiniciar para empezar de nuevo.",
      resetConfirm:
        "¿Estás seguro de que quieres reiniciar el juego? Esto restaurará las 100 preguntas.",
      allQuestions: "Todas las Preguntas",
      remaining: "restantes",
    },
  };

  // Get available questions (not completed)
  const getAvailableQuestions = () => {
    return questions[language].filter(
      (_, index) => !completedQuestions.has(index + 1)
    );
  };

  // Generate random question with dice animation
  const generateRandomQuestionWithAnimation = () => {
    const available = getAvailableQuestions();
    if (available.length === 0) {
      alert(translations[language].noMoreQuestions);
      return;
    }

    setIsRolling(true);
    setShowDice(true);

    // Show dice for 2 seconds, then show question
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * available.length);
      const selectedQuestion = available[randomIndex];
      const questionNumber = parseInt(selectedQuestion.split(".")[0]);

      setCurrentQuestion({ text: selectedQuestion, number: questionNumber });
      setShowModal(true);
      setIsRolling(false);
      setShowDice(false);
    }, 2000);
  };

  // Complete question
  const completeQuestion = () => {
    if (currentQuestion) {
      setCompletedQuestions(
        (prev) => new Set([...prev, currentQuestion.number])
      );
      setCurrentQuestion(null);
      setShowModal(false);
    }
  };

  // Reset game
  const resetGame = () => {
    if (window.confirm(translations[language].resetConfirm)) {
      console.log("Resetting game...");
      setCompletedQuestions(new Set());
      setCurrentQuestion(null);
      setShowModal(false);
      setIsRolling(false);
      setShowDice(false);
      // Clear LocalStorage
      localStorage.removeItem("questionsGameProgress");
      console.log("LocalStorage cleared");
    }
  };

  // Show all questions dropdown
  const [showDropdown, setShowDropdown] = useState(false);

  // Load saved progress from LocalStorage
  useEffect(() => {
    // Load saved progress on mount only
    const savedProgress = localStorage.getItem("questionsGameProgress");
    console.log("Loading from LocalStorage:", savedProgress);

    if (savedProgress) {
      try {
        const { completed, language: savedLanguage } =
          JSON.parse(savedProgress);
        console.log("Loaded completed questions:", completed);
        setCompletedQuestions(new Set(completed));
        setLanguage(savedLanguage);
      } catch (error) {
        console.error("Error parsing saved progress:", error);
        localStorage.removeItem("questionsGameProgress");
      }
    }
  }, []); // Empty dependency array - only run on mount

  // Separate useEffect to save progress - only when actually changed
  useEffect(() => {
    // Only save if we have completed questions or language changed
    if (completedQuestions.size > 0 || language !== "english") {
      const progress = {
        completed: Array.from(completedQuestions),
        language: language,
      };
      console.log("Saving to LocalStorage:", progress);
      localStorage.setItem("questionsGameProgress", JSON.stringify(progress));
    }
  }, [completedQuestions, language]);

  return (
    <div className="h-screen w-screen bg-black p-4 overflow-hidden fixed inset-0">
      {/* Language Dropdown - Top Right */}
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="px-2 py-1.5 sm:px-3 sm:py-2 text-sm sm:text-base border border-blue-700 rounded-md text-white shadow-sm z-50"
          style={{
            backgroundImage: "url('/buttonWood.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <option value="english" style={{ backgroundColor: "#1e293b", color: "#ffffff" }}>English</option>
          <option value="spanish" style={{ backgroundColor: "#1e293b", color: "#ffffff" }}>Spanish</option>
        </select>
      </div>

      {/* Main Game Area - Center */}
      <div 
        className="flex flex-col items-center justify-center min-h-[90vh] rounded-xl p-8 max-w-5xl mx-auto shadow-2xl border-2 border-[#2a1a0f] relative overflow-hidden"
      >
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/sakura.mp4" type="video/mp4" />
        </video>
        {/* Content overlay */}
        <div className="relative z-10 w-full">
        <h1 
          className="text-4xl font-bold text-center mb-8 text-white"
          style={{
            textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 0 0 4px #000'
          }}
        >
          {translations[language].title}
        </h1>

        {/* Generator Area */}
        <div className="text-center mb-8">
          <p 
            className="text-lg mb-4 text-white"
            style={{
              textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 0 0 4px #000'
            }}
          >
            {translations[language].questionsRemaining}:{" "}
            {100 - completedQuestions.size}
          </p>

          {/* Generator and Reset Buttons */}
          <div className="flex gap-4 justify-center mb-6">
            <button
              onClick={generateRandomQuestionWithAnimation}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <FaDice size={20} className="dice-icon" />
              {isRolling
                ? translations[language].rolling
                : translations[language].generateQuestion}
            </button>
            <button
              onClick={resetGame}
              className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <FaTrash size={20} className="trash-icon" />
              {translations[language].resetGame}
            </button>
          </div>

          {/* Show All Questions Button */}
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <FaList size={18} className="list-icon" />
            {showDropdown
              ? translations[language].hideAllQuestions
              : translations[language].showAllQuestions}
        </button>
        </div>

        {/* Questions Dropdown */}
        {showDropdown && (
          <div className="w-full max-w-4xl max-h-96 overflow-y-auto border border-blue-800 rounded-lg bg-slate-800 shadow-lg">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-4 text-white">
                {translations[language].allQuestions} (
                {getAvailableQuestions().length}{" "}
                {translations[language].remaining})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {questions[language].map((question, index) => {
                  const questionNumber = index + 1;
                  const isCompleted = completedQuestions.has(questionNumber);
                  return (
                    <div
                      key={questionNumber}
                      className={`p-2 rounded cursor-pointer transition-colors ${
                        isCompleted
                          ? "bg-slate-700 text-gray-500 line-through"
                          : "bg-slate-700 hover:bg-slate-600 text-blue-100"
                      }`}
                      onClick={() => {
                        if (!isCompleted) {
                          setCurrentQuestion({
                            text: question,
                            number: questionNumber,
                          });
                          setShowModal(true);
                        }
                      }}
                    >
                      {question}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        </div>
      </div>

      {/* Dice Rolling Animation */}
      {showDice && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="text-center">
            <div className="mb-8 relative">
              <div className="dice-3d-container">
                {/* Toggle animation only while rolling */}
                <div
                  className={`dice-3d-cube ${isRolling ? "dice-3d-roll" : ""}`}
                >
                  {/* 1 */}
                  <div className="dice-face front dice-1">
                    <span className="dice-dot" />
                  </div>
                  {/* 2 */}
                  <div className="dice-face back dice-2">
                    <span className="dice-dot" />
                    <span className="dice-dot" />
                  </div>
                  {/* 3 */}
                  <div className="dice-face right dice-3">
                    <span className="dice-dot" />
                    <span className="dice-dot" />
                    <span className="dice-dot" />
                  </div>
                  {/* 4 */}
                  <div className="dice-face left dice-4">
                    <span className="dice-dot" />
                    <span className="dice-dot" />
                    <span className="dice-dot" />
                    <span className="dice-dot" />
                  </div>
                  {/* 5 */}
                  <div className="dice-face top dice-5">
                    <span className="dice-dot" />
                    <span className="dice-dot" />
                    <span className="dice-dot" />
                    <span className="dice-dot" />
                    <span className="dice-dot" />
                  </div>
                  {/* 6 */}
                  <div className="dice-face bottom dice-6">
                    <span className="dice-dot" />
                    <span className="dice-dot" />
                    <span className="dice-dot" />
                    <span className="dice-dot" />
                    <span className="dice-dot" />
                    <span className="dice-dot" />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-white text-2xl font-bold">
              {translations[language].rollingDice}
            </p>
            <div className="mt-4">
              <div className="inline-block w-8 h-1 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      )}

      {/* Question Modal */}
      {showModal && currentQuestion && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-slate-800 rounded-lg p-8 max-w-2xl mx-4 shadow-xl border border-blue-800">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {translations[language].question} {currentQuestion.number}
            </h2>
            <p className="text-lg mb-6 text-blue-100">{currentQuestion.text}</p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={completeQuestion}
                className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                {translations[language].complete}
              </button>
              <button
                onClick={() => {
                  setShowModal(false);
                  setCurrentQuestion(null);
                }}
                className="px-6 py-3 bg-slate-600 text-white rounded-lg hover:bg-slate-500 transition-colors"
              >
                {translations[language].cancel}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
