let currentSlide = 0; 
function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});
    
function subscribe(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    if (email) {
        // AJAX запрос для отправки email на сервер
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "subscribe.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                alert('Спасибо за подписку!');
            }
        };
        xhr.send("email=" + encodeURIComponent(email));
    } else {
        alert('Пожалуйста, введите корректный email.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.footer-link');
    
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

$(document).ready(function() {
    // Datepicker configuration
    $("#calendar-icon").click(function() {
        $("#date-input").datepicker({
            numberOfMonths: 2,
            dateFormat: "dd MM yy",
            onSelect: function(dateText) {
                $("#date-input").val(dateText);
            }
        }).datepicker("show");
    });

    // Participant counter
    let participantCount = 1;
    $("#increase").click(function(e) {
        e.preventDefault();
        participantCount++;
        $("#participant-count").text(participantCount);
    });

    $("#decrease").click(function(e) {
        e.preventDefault();
        if (participantCount > 1) {
            participantCount--;
            $("#participant-count").text(participantCount);
        }
    });
        
    $(document).ready(function() {
        $('.main_category').click(function(e) {
            e.preventDefault();
            
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            } else {
                $('.main_category').removeClass('active');
                $(this).addClass('active');
            }
        });
    });
    
});




