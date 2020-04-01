<template>
  <div>
    <b-pagination
      class="pagination__post"
      :total="total"
      :current.sync="current"
      :range-before="rangeBefore"
      :range-after="rangeAfter"
      :order="order"
      :size="size"
      :simple="isSimple"
      :rounded="isRounded"
      :per-page="perPage"
      :icon-prev="prevIcon"
      :icon-next="nextIcon"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
    ></b-pagination>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Pagination",
  data() {
    return {
      total: 10,
      current: 1,
      perPage: 10,
      rangeBefore: 1,
      rangeAfter: 1,
      order: "is-centered",
      size: "is-medium",
      isSimple: false,
      isRounded: false,
      prevIcon: "chevron-left",
      nextIcon: "chevron-right"
    };
  },
  computed: {
    ...mapGetters(["postCount"])
  },
  watch: {
    current: function() {
      this.getPage();
    }
  },
  methods: {
    ...mapActions(["fetchPosts"]),
    getPage() {
      let params = {
        limit: this.perPage,
        page: this.current
      };
      this.fetchPosts(params);
    }
  },
  mounted() {
    if (this.postCount > 0) {
      this.total = this.postCount;
    }
  }
};
</script>
<style lang="scss">
.pagination__post {
  padding: 40px;
}
</style>
