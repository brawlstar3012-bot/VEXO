// ============================
// VEXO - SCRIPT PRINCIPAL
// ============================


// CHANGER DE PAGE

function showPage(pageName) {

  const pages = document.querySelectorAll(".page");

  pages.forEach(page => {
    page.classList.remove("active");
  });

  const selectedPage = document.getElementById(pageName);

  if (selectedPage) {
    selectedPage.classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// ============================
// CHAT
// ============================

 async function sendMessage() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();

  if (text === "") {
    return;
  }

  addMessage(text, "user");
  input.value = "";

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: text })
    });

    const data = await response.json();
    addMessage(data.reply, "ai");

  } catch (error) {
    addMessage("❌ VEXO n'arrive pas à contacter le serveur.", "ai");
  }
}

  
async function sendMessage() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();

  if (text === "") {
    return;
  }

  addMessage(text, "user");
  input.value = "";

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: text })
    });

    const data = await response.json();
    addMessage(data.reply, "ai");
  } catch (error) {
    addMessage("❌ VEXO n'arrive pas à contacter le serveur.", "ai");
  
}

  addMessage(text, "user");
  input.value = "";

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: text })
    });

    const data = await response.json();
    addMessage(data.reply, "ai");

  } catch (error) {
    addMessage("❌ VEXO n'arrive pas à contacter le serveur.", "ai");
addMessage(text, "user");
input.value = "";

try {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message: text })
  });

  const data = await response.json();
  addMessage(data.reply, "ai");

} catch (error) {
  addMessage("❌ VEXO n'arrive pas à contacter le serveur.", "ai");
}
}

  const messages = document.getElementById("messages");

  const message = document.createElement("div");

  
  

  message.className = "message " + type;

  if (type === "ai") {

    message.innerHTML = `
      <div class="avatar">🐋</div>
      <div class="bubble">${formatText(text)}</div>
    `;

  } else {

    message.innerHTML = `
      <div class="bubble">${formatText(text)}</div>
    `;

  }

  messages.appendChild(message);

  messages.scrollTop = messages.scrollHeight;
}

function addMessage(text, type) {
  const messages = document.getElementById("messages");
  const message = document.createElement("div");

  message.className = "message " + type;

  if (type === "ai") {
    message.innerHTML = `
      <div class="avatar">🐋</div>
      <div class="bubble">${formatText(text)}</div>
    `;
  } else {
    message.innerHTML = `
      <div class="bubble">${formatText(text)}</div>
    `;
  }

  messages.appendChild(message);
  messages.scrollTop = messages.scrollHeight;
}
// FORMATER LE TEXTE

function formatText(text) {

  return text
    .replace(/\n/g, "<br>")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
}


// ============================
// RÉPONSES DE DÉMONSTRATION
// ============================

function generateResponse(text) {

  const lowerText = text.toLowerCase();


  // EQUATION

  if (
    lowerText.includes("2x + 5 = 15") ||
    lowerText.includes("2x+5=15")
  ) {

    return `
      Bien sûr ! 🧠<br><br>

      On cherche <strong>x</strong> dans :
      <strong>2x + 5 = 15</strong><br><br>

      <strong>Étape 1 :</strong> On retire 5 des deux côtés.<br>
      2x = 10<br><br>

      <strong>Étape 2 :</strong> On divise par 2.<br>
      x = 5<br><br>

      ✅ La réponse est donc <strong>x = 5</strong>.
    `;
  }


  // FRACTIONS

  if (
    lowerText.includes("fraction") ||
    lowerText.includes("fractions")
  ) {

    return `
      Une fraction représente une partie d'un tout. 📚<br><br>

      Par exemple, dans <strong>3/4</strong> :<br><br>

      • 3 est le numérateur.<br>
      • 4 est le dénominateur.<br><br>

      Cela signifie que l'on prend 3 parties
      parmi 4 parties égales.
    `;
  }


  // MATHS

  if (
    lowerText.includes("math") ||
    lowerText.includes("calcul") ||
    lowerText.includes("équation")
  ) {

    return `
      🔢 Je peux t'aider avec ton exercice de maths !<br><br>

      Envoie-moi l'énoncé complet et je pourrai
      t'expliquer la méthode étape par étape.
    `;
  }


  // FRANÇAIS

  if (
    lowerText.includes("français") ||
    lowerText.includes("grammaire") ||
    lowerText.includes("conjugaison")
  ) {

    return `
      📖 Je peux t'aider en français !<br><br>

      Envoie ton exercice et indique-moi ce que
      tu ne comprends pas.
    `;
  }


  // REPONSE GENERALE

  return `
    Je vois ton exercice. 👀<br><br>

    Pour cette version de démonstration, je peux
    répondre à quelques exercices préprogrammés.<br><br>

    Essaie par exemple :<br>
    <strong>« Résous 2x + 5 = 15 »</strong><br><br>

    🔜 La prochaine étape sera de connecter VEXO
    à une véritable IA.
  `;
}


// ============================
// QUESTIONS RAPIDES
// ============================

function quickQuestion(question) {

  const input = document.getElementById("userInput");

  input.value = question;

  sendMessage();
}


// ============================
// NOUVELLE CONVERSATION
// ============================

function newConversation() {

  const messages = document.getElementById("messages");

  messages.innerHTML = `
    <div class="message ai">

      <div class="avatar">🐋</div>

      <div class="bubble">

        Nouvelle conversation ! 👋
        <br><br>

        Quel exercice veux-tu faire aujourd'hui ?

      </div>

    </div>
  `;

}


// ============================
// PHOTO
// ============================

function handleImage(event) {

  const file = event.target.files[0];

  if (!file) {
    return;
  }

  const fileName = document.getElementById("fileName");

  fileName.textContent = "📷 " + file.name;

  addMessage(
    "J'ai reçu ta photo 📷. Dans la prochaine version de VEXO, l'IA pourra analyser directement l'exercice présent sur l'image.",
    "ai"
  );

}


// ============================
// MATIÈRES
// ============================

function selectSubject(subject) {

  showPage("chat");

  const input = document.getElementById("userInput");

  input.placeholder = "Écris ton exercice de " + subject + "...";

  addMessage(
    "📚 Tu as choisi la matière : <strong>" + subject + "</strong>.<br><br>Envoie-moi ton exercice !",
    "ai"
  );

}


// ============================
// PREMIUM
// ============================

function openPremium() {

  const modal = document.getElementById("premiumModal");

  modal.classList.add("show");

}


function closePremium() {

  const modal = document.getElementById("premiumModal");

  modal.classList.remove("show");

}


// Fermer la fenêtre si on clique en dehors

document.getElementById("premiumModal").addEventListener("click", function(event) {

  if (event.target === this) {
    closePremium();
  }

});


// ============================
// ENVOYER AVEC ENTRÉE
// ============================

// ============================
// ENVOYER AVEC ENTRÉE
// ============================

document.getElementById("userInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    sendMessage();
  }
});