<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
//import PostList from "@/components/Posts/PostList";
export default {
   // components: {
  //   PostList
  // },
  //asncData(context) {
  //asyncData > Executed in server side.So waiting until send all finish page to client.
  //method available only in Page section. Is a nuxt method. Merge data with vue object of the component.
  // fetch > like asyncData but merge data in STORE

  //}
  // created () {
  //   this.$store.dispatch('setPosts',this.loadedPosts);
  //   //console.log(this.$store.getters.loadedPosts);
  // },
  middleware: 'log',
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
};
</script>


<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
