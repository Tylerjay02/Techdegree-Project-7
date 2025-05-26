// notification bell //

const bellToggle = document.querySelector('.notif-bell');
const listContainer = document.querySelector('.notification')
const list = document.querySelector('.notification ul')
const listItems = list.children;

bellToggle.addEventListener('click', () => {
  if (listContainer.style.display === 'block') {
    listContainer.style.display = 'none';
  } else {
    listContainer.style.display = 'block';

    // Check if there are notifications (list items)
    if (list.children.length > 0) {
      const bellAlert = document.querySelector('.notif-bell-green-alert');
      if (bellAlert) {
        bellAlert.style.display = 'none';
        bellToggle.style.marginTop = '5px';
      }
    }
  }
});

// Adding a remove btn to each li in the list //

const alert = document.querySelector('.notifListCon')

for (let i=0; i< listItems.length; i++ ) {
  addRemoveX(listItems[i])
}

function addRemoveX(li) {
  let remove = document.createElement('button')
  remove.className = 'remove';
  remove.textContent = 'X';
  li.appendChild(remove)

  remove.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(remove);
}

// Alert pop-up if there are notifications //


// Check for unread messages and alert if any //
function checkUnreadMessages() {
  const alertContainer = document.querySelector('#alert');
  const unreadCount = listItems.length;
  if (unreadCount > 0) {
    let alert = document.createElement('p');
    alert.textContent = (`Alert: You have ${unreadCount} unread messages.`);
    alertContainer.appendChild(alert)
    let removeAlert = document.createElement('button')
    removeAlert.className = 'removeAlert';
    removeAlert.textContent = 'X';
    alertContainer.appendChild(removeAlert)

    removeAlert.addEventListener('click', () => {
      alertContainer.remove();
    });

    alertContainer.appendChild(removeAlert);
  }
}

// Call this function when the page loads or when appropriate //
checkUnreadMessages();


// Scrolling static nav bar //

window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navigation');
    if (window.scrollY > 60) {
      nav.classList.add('fixed-nav');
    } else {
      nav.classList.remove('fixed-nav');
    }
  });

// Message and Send Section //

const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', (e) => {
  e.preventDefault();
  if (user.value === "" && message.value === "") {
    window.alert("Please fill out user and message fields before sending");
  } else if (user.value === "" ) {
    window.alert("Please fill out user field before sending");
  } else if (message.value === "" ) {
    window.alert("Please fill out message field before sending");
  } else {
    window.alert(`Message successfully sent to: ${user.value}`);
    user.value = "";
    message.value = "";
  }
});
