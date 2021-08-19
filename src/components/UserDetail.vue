<template>
  <div class="uk-container">
    <h4>This is the user detail component</h4>
    <div v-for="(user, index) in result" :key="index">
      {{ result.user.name.last }}
    </div>
  </div>
</template>

<script>
export default {
  setup(props) {
    return {}
  },
}
</script>

<style></style>
