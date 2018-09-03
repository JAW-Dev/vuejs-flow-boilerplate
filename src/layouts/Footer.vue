<template>
  <footer :id="setID" :class="setClass" v-bind="setAttr">
    <slot><p>Footer</p></slot>
  </footer>
</template>

<script lang="js"> // lang=js needs to be declared to remove VSCode typscript errors
/* @flow */

export default {
  name: 'mainLayoutFooter',
  components: {},
  props: {
    setID: {
      type: String,
      default: 'footer',
    },
    setClass: {
      type: String,
      default: 'footer',
    },
    setAttr: {
      type: Object,
      default: () => {
        return { role: 'contentinfo' }
      },
    },
  },
  data() {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  // Lifecycle Hooks
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
}
</script>
