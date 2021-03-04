function animateTitle() {
        i >= message.length - 1 ? i = 0 : i++, document.title = message[i], setTimeout("animateTitle()", 200)
    }
        var message = ["▁▂▃▄▅▆▇ ☺", "▂▁▂▃▄▅▆ ☺",
                "▃▂▁▂▃▄▅ ☻", "▄▃▂▁▂▃▄ ☻", "▅▄▃▂▁▂▃ ☺",
                "▆▅▄▃▂▁▂ ☺", "▇▆▅▄▃▂▁ ☻", "▆▇▆▅▄▃▂ ☻",
                "▅▆▇▆▅▄▃ ☺", "▄▅▆▇▆▅▄ ☺", "▃▄▅▆▇▆▅ ☻",
                "▂▃▄▅▆▇▆ ☻"],
            i = 0;
        animateTitle();
    
        window.addEventListener('load', function () {
            document.getElementById('dismiss').addEventListener('click', function () {
                this.parentNode.style.display = 'none';
            })
        });