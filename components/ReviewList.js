app.component('review-list', {
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  template:
  `<ul>
    <li v-for="(review, index) in reviews" :key="index">
      {{review.review}} gave this {{ review.rating }} stars
      <br/>
      Recommended : {{ review.recommend }}
      <br/>
      "{{ review.review }}"
    </li>
  </ul>`
})