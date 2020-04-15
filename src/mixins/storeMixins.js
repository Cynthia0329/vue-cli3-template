import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'test',
    ])
  },
  methods: {
    ...mapActions([
      'setTest',
    ])
  }
}
