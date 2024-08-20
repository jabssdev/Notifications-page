const btnMarkAllRead = document.querySelector("#btn-mark-all");
const notifications = document.querySelectorAll("section>article");
const amountNotifications = document.querySelector("#amount-notifications");

function updateNotificationCounter() {
	const unreadCount = document.querySelectorAll(".not-read").length;
	amountNotifications.textContent = unreadCount;
}

function markNotificationAsRead(notification) {
	notification.classList.remove("notification-active");
	const notReadIndicator = notification.querySelector(".not-read");
	if (notReadIndicator) {
		notReadIndicator.classList.remove("not-read");
	}
}

function markAllNotificationsAsRead() {
	notifications.forEach(markNotificationAsRead);
}

document.addEventListener("DOMContentLoaded", updateNotificationCounter);

notifications.forEach((notification) => {
	notification.addEventListener("click", function () {
		markNotificationAsRead(notification);
		updateNotificationCounter();
	});
});

btnMarkAllRead.addEventListener("click", () => {
	markAllNotificationsAsRead();
	updateNotificationCounter();
});
