// app.js
document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.getElementById("carousel");
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modalContent");
    const closeModal = document.getElementById("closeModal");
  
    // Function to render the cards
    function renderCards() {
      users.forEach((user, index) => {
        const card = document.createElement("div");
        card.className = "bg-white rounded-lg shadow-lg p-4 w-60 cursor-pointer";
        card.innerHTML = `
          <img src="${user.image}" alt="${user.name}" class="rounded-full w-24 h-24 mx-auto mb-4">
          <h3 class="text-center text-xl font-semibold">${user.name}</h3>
          <p class="text-center text-gray-600">${user.position}</p>
          <p class="text-center text-gray-400">${user.company}</p>
        `;
        card.addEventListener("click", () => showModal(index));
        carousel.appendChild(card);
      });
    }
  
    // Function to show the modal
    function showModal(index) {
      const user = users[index];
      modalContent.innerHTML = `
        <div class="flex items-center mb-4">
          <img src="${user.image}" alt="${user.name}" class="rounded-full w-20 h-20 mr-4">
          <div>
            <h3 class="text-xl font-bold">${user.name}</h3>
            <p class="text-gray-600">${user.position}</p>
            <p class="text-gray-400">${user.company}</p>
          </div>
        </div>
        <p class="text-gray-700 mb-4">${user.description}</p>
        <div class="flex gap-2">
          ${user.socialLinks
            .map(
              (link) =>
                `<a href="${link.url}" class="text-blue-500 text-lg">${link.icon}</a>`
            )
            .join("")}
        </div>
      `;
      modal.classList.remove("hidden");
    }
  
    // Function to close the modal
    closeModal.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  
    // Render the cards on page load
    renderCards();
  });
  