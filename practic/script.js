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

    const decreaseBtn = document.getElementById('decrease');
    const increaseBtn = document.getElementById('increase');
    const participantCount = document.getElementById('main_digit');
    const findBtn = document.getElementById('find-btn');
    let count = 1;
    if(participantCount.textContent)
    {
        if(participantCount.textContent > 1)
            count = participantCount.textContent;
    }

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
    })

    decreaseBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (count > 1) {
            count--;
            participantCount.textContent = count;
        }
    });

    increaseBtn.addEventListener('click', function(e) {
        e.preventDefault();
        count++;
        participantCount.textContent = count;
    });

    findBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const destination = document.getElementById('main_input').value;
        const date = document.getElementById('date-input').value;
        const participants = participantCount.textContent;

        const url = `route.html?destination=${encodeURIComponent(destination)}&date=${encodeURIComponent(date)}&participants=${encodeURIComponent(participants)}`;
        window.location.href = url;
    });

});

document.getElementById('main_input').addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    const dropdown = document.getElementById('dropdown');
    const items = dropdown.getElementsByTagName('a');

    let hasVisibleItems = false;
    for (let i = 0; i < items.length; i++) {
        const text = items[i].textContent || items[i].innerText;
        if (text.toLowerCase().includes(filter)) {
            items[i].style.display = "";
            hasVisibleItems = true;
        } else {
            items[i].style.display = "none";
        }
    }

    // Показать или скрыть выпадающий список в зависимости от наличия видимых элементов
    if (hasVisibleItems) {
        dropdown.classList.add('show');
    } else {
        dropdown.classList.remove('show');
    }
});

document.getElementById('main_input').addEventListener('focus', function() {
    document.getElementById('dropdown').classList.add('show');
});

document.addEventListener('click', function(e) {
    const input = document.getElementById('main_input');
    const dropdown = document.getElementById('dropdown');
    if (!input.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove('show');
    }
});

const dropdown = document.getElementById('dropdown');
const items = dropdown.getElementsByTagName('a');
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function() {
        const input = document.getElementById('main_input');
        input.value = this.textContent || this.innerText;
        dropdown.classList.remove('show');
    });
}


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

    // // Participant counter
    // let participantCount = 1;
    // $("#increase").click(function(e) {
    //     if(participantCount < 50) {
    //         e.preventDefault();
    //         participantCount++;
    //         $("#participant-count").text(participantCount);
    //     }
    // });
    //
    // $("#decrease").click(function(e) {
    //     e.preventDefault();
    //     if (participantCount > 1) {
    //         participantCount--;
    //         $("#participant-count").text(participantCount);
    //     }
    // });
        
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




