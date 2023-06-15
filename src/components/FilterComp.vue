<template>
  <div class="filters">
    <h3>Filters</h3>
    <div class="form-group">
      <label for="genre">Genre:</label>
      <select id="genre" v-model="selectedGenre" class="form-control">
        <option value="">All</option>
        <option v-for="genre in genres" :value="genre.id" :key="genre.id">
          {{ genre.name }}
        </option>
      </select>
    </div>
    <div class="form-group">
      <label for="duration">Duration:</label>
      <select id="duration" v-model="selectedDuration" class="form-control">
        <option value="">All</option>
        <option value="short">Short (less than 1 hour)</option>
        <option value="medium">Medium (1-2 hours)</option>
        <option value="long">Long (more than 2 hours)</option>
      </select>
    </div>
    <button @click="applyFilters" class="btn btn-primary">Apply Filters</button>
  </div>
</template>

<script>
import axios from "axios";
import apiClient from "@/api";
export default {
  /*  data() {
    return {
      selectedGenre: "",
      selectedDuration: "",
      genres: [
        { id: 1, name: "Action" },
        { id: 2, name: "Comedy" },
        { id: 3, name: "Drama" },
      ],
    };
  },
  methods: {
    applyFilters() {
      this.$emit("filters-applied", {
        genre: this.selectedGenre,
        duration: this.selectedDuration,
      });
    },
  }, */
  data() {
    return {
      activeSubFilters: [],
    };
  },
  computed: {
    activeFilter() {
      return this.$store.state.filters.activeFilter;
    },
    filters() {
      return this.$store.state.filters.filters;
    },
    activeSubFilter() {
      return this.$store.state.filters.activeSubFilter;
    },
    subfilters() {
      return this.$store.state.filters.subfilters;
    },
  },
  async fetch() {
    let env = this;
    await axios.get(apiClient).then(({ data }) => {
      Object.keys(data.message).forEach(function (key) {
        env.addFilter(key);
        if (data.message[key].length > 0) {
          // Has sub-breed, save in separate list for API fetching
          env.addSubFilter(key);
        }
      });
    });
  },
  methods: {
    addFilter(filter) {
      this.$store.commit("filters/add", filter);
    },
    addSubFilter(subfilter) {
      this.$store.commit("filters/addSub", subfilter);
    },
    filterByBread(event) {
      let breed = event.target.value;
      this.$store.commit("filters/toggle", breed);
      if (!this.subfilters.includes(breed)) {
        // Reset sub-filter toggle
        this.$store.commit("filters/toggleSub", null);
        this.activeSubFilters = [];
      } else {
        this.loadSubBreeds();
      }
    },
    filterBySubBread(event) {
      this.$store.commit("filters/toggleSub", event.target.value);
    },
    loadSubBreeds() {
      let env = this;
      axios
        .get("https://dog.ceo/api/breed/" + this.activeFilter + "/list")
        .then(({ data }) => {
          if (data.message.length > 0) {
            env.activeSubFilters = data.message;
          } else {
            env.activeSubFilters = [];
          }
        });
    },
    reset() {
      this.activeSubFilters = [];
      this.$store.commit("filters/toggle", null);
      this.$store.commit("filters/toggleSub", null);
      document.querySelector("select.primary-filter").selectedIndex = null;
    },
  },
};
</script>

<style scoped>
.filters {
  margin-bottom: 20px;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 5px;
}

h3 {
  margin-bottom: 10px;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #666;
}

select.form-control {
  width: 100%;
  height: 40px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button.btn-primary {
  display: block;
  width: 100%;
  height: 40px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button.btn-primary:hover {
  background-color: #0056b3;
}

button.btn-primary:focus {
  outline: none;
  box-shadow: none;
}
</style>
