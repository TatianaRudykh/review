/*
const reviewsDivSelector = document.querySelector('.reviews-div');

const reviewsLabelTextSelector = document.querySelector('.reviews__labeltext');
const reviews2LabelTextSelector = document.querySelector('.reviews-1__text');

const btnSelector = document.querySelector('.reviews__btn');

const reviewsInputSelector = document.querySelector('.reviews__input');
const reviews2InputSelector = document.querySelector('.reviews-text__input');

function createReviewCard(reviews) {
    const reviewsLabelTextSelector = document.querySelector('.reviews__labeltext');

    const cloneReviewsLabelTextElement = reviewsLabelTextSelector.cloneNode(true);
    const cloneReviews2LabelTextElement = reviews2LabelTextSelector.cloneNode(true);

    const reviewsSelector = cloneReviewsLabelTextElement.querySelector('.reviews__label');
    const reviews2Selector = cloneReviews2LabelTextElement.querySelector('.reviews-1__text');

    reviewsSelector.innerHTML = reviews
    reviews2Selector.innerHTML = reviews2
    

    cloneReviewsLabelTextElement.style.display = 'flex'

    return cloneReviewsLabelTextElement;
}

btnSelector.addEventListener('click', () => {

    const reviews = reviewsInputSelector.value
    const reviews2 = reviews2InputSelector.value

    const reviewsCard = createReviewCard(reviews, reviews2);

    reviewsDivSelector.appendChild(reviewsCard)
})

const data = [
    {
        name: 'Таня',
        review: 'Текст отзыва'
    },
    {
        name: 'Ваня',
        review: 'Текст его отзыва'
    },{
        name: 'Маня',
        review: 'Текст ее отзыва'
    },
]

for(i=0; i < data.length; i++) {
    const name = data[i].name
    const review = data[i].review


    const reviewsCard = createReviewCard(name, reviews);

    reviewsDivSelector.appendChild(reviewsCard)
}
*/

const rDivSelector = document.querySelector('.r-div')

const btnSelector = document.querySelector('.r__btn')

const nameInputSelector = document.querySelector('.r-n__input')

const textInputSelector = document.querySelector('.r-t__input')


function createReviewCard(name, text) {
    const reviewSelector = rDivSelector.querySelector('.review')

    const cloneReviewElement = reviewSelector.cloneNode(true)

    const rNameSelector = cloneReviewElement.querySelector('.r-name')
    const rTextSelector = cloneReviewElement.querySelector('.r-text')

    rNameSelector.innerText = name
    rTextSelector.innerText = text

    cloneReviewElement.style.display = 'block'
    return cloneReviewElement;
}

btnSelector.addEventListener('click', () => {

    const myRName = nameInputSelector.value
    const myRText = textInputSelector.value

    const myReview = createReviewCard(myRName, myRText);

    reviewSelector.appendChild(myReview)
})

const arr = [
    {
        name: 'Таня',
        text: 'Отзыв Тани'
    },
    {
        name: 'Маня',
        text: 'Отзыв Мани'
    },
    {
        name: 'Даня',
        text: 'Отзыв Дани'
    },
]

for(i=0; i < arr.length; i++) {
    const name = arr[i].name
    const text = arr[i].text

    const cardEl = createReviewCard(name, text)
    reviewSelector.appendChild(myReview)
}