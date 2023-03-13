const myCarouselElement = document.querySelector('#myCarousel');

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
});

function maleQuiz() {
    $('#quiz').html(`
        <div class="row align-items-md-stretch">
            <div class="col-md-6">
                <div class="h-100 p-5 text-bg-dark rounded-3">
                <h2>Male Fitness Choice #1</h2>
                <p>
                    Explain this decision branch direction...
                </p>
                <button class="btn btn-outline-light" type="button" id="male-quiz">Discover what choice #1 means...</button>
                </div>
            </div>
            <div class="col-md-6">
                <div class="h-100 p-5 bg-light border rounded-3">
                <h2>Male Fitness Choice #2</h2>
                <p>
                    Explain this decision branch direction...
                </p>
                <button class="btn btn-outline-secondary" type="button" id="female-quiz">Discover what choice #2 means...</button>
                </div>
            </div>
        </div>
    `);
}

function femaleQuiz() {

}

function init() {
    $('#male-quiz').on('click', maleQuiz);
    $('#female-quiz').on('click', femaleQuiz);
} 

window.addEventListener("load", init, false);