var eventBus = new Vue();
Vue.use(vuejsDatepicker);
Vue.component("table-worker", {
  props: {
    workers: {
      type: Array
    },
    tableposition: {
      type: Array
    }
  },
  template: `<div>
	<table>
	<thead>
		<tr>
			<th>ФИО</th>
			<th>Должность</th>
			<th>Дата рождения</th>
		</tr>
	</thead>
	<tbody>
		<tr v-for="item in workers" :key="item.id">
			<td>{{ item.name }}</td>
			<td>{{ item.position }}</td>
			<td>{{ item.date }}</td>
			<td><button @click="changeWorker(item.id)">Редактировать</button></td>
			<td><button @click="deleteWorker(item.id)">Удалить</button></td>
		</tr>
	</tbody>
</table>
<div v-show="showForm">
 <form-worker :positions="TablePosition" :PushOrReplace="false" @checkValue="checkValue"></form-worker>
</div>
</div>`,
  data() {
    return {
      arr: this.workers,
      TablePosition: this.tableposition,
      change: Number,
      showForm: false,
      index: 0
    };
  },
  methods: {
    changeWorker(el) {
      this.showForm = true;
      this.change = el;
      this.getIndexWorker(el);
    },
    checkValue(obj) {
      let replacedWorker = {
        id: this.change,
        name: obj.name,
        position: obj.position,
        date: obj.date
      };
      this.showForm = false;
      this.workers.splice(this.index, 1, replacedWorker);
    },
    getIndexWorker(abr) {
      this.workers.forEach((elem, index) => {
        if (elem.id === abr) this.index = index;
      });
    },
    deleteWorker(el) {
      this.getIndexWorker(el);
      this.workers.splice(this.index, 1);
    }
  }
});

Vue.component("tab-worker", {
  props: {
    pass: {
      type: Array
    },
    search: {
      type: Array
    }
  },
  template: `
	<div>
		<div>
		<button type="button"
		v-for="(tab, index) in tabs" 
		:key="index"
		@click="selectedTab = tab">{{ tab }}
	</button>
</div>
<div v-show="selectedTab === 'Добавить сотрудника'">
	<div> 
		<form-worker :positions="passed" @closeTab="closeTab"></form-worker>
	</div>
</div>
<div v-show="selectedTab === 'Поиск'">
	<search-worker :users="find"></search-worker>
		</div>
	</div>`,
  data() {
    return {
      tabs: ["Добавить сотрудника", "Поиск"],
      selectedTab: "",
      passed: this.pass,
      find: this.search
    };
  },
  methods: {
    closeTab(e) {
      this.selectedTab = e;
    }
  }
});
Vue.component("form-worker", {
  props: {
    positions: {
      type: Array
    },
    CurrentId: Number,
    PushOrReplace: {
      type: Boolean,
      default: true
    }
  },
  template: `
	<form @submit.prevent="onSubmit">
		<p v-if="errors.length">
			<b>Пожалуйста заполните следующие обязательные поля:</b>
			<ul>
				<li v-for="error in errors"> {{error}} </li>
			</ul>
		</p>
		<p>
			<label for="name">ФИО:</label>
			<input id="name" v-model="name" value="passedobj.name">
		</p>
		<p>
			<label for="post">Должность</label>
			<select id="post" v-model="post">
			<option v-for="position in positions">{{position}}
			</option>
			</select>
			<span>
				<button type="button" @click="showAddPosition = !showAddPosition">Добавить должность</button>
			</span>
			<p v-show="showAddPosition">
				<label for="add">Добавление новой должности</label>
				<input id="add" v-model="newPosition">
				<span><button type="button" @click="addNewPosition">Добавить</button></span>
			</p>
		<p>
			<datepicker placeholder="Выберите дату рождения" v-model="date" :format="format"></datepicker>
		</p>
		<p>
			<input type="submit" value="Submit">
		</p>
	</form>`,
  data() {
    return {
      name: null,
      post: null,
      date: null,
      errors: [],
      format: "d MMMM yyyy",
      newPosition: null,
      showAddPosition: false,
      test: this.PushOrReplace
    };
  },
  methods: {
    onSubmit() {
      if (this.PushOrReplace) {
        if (this.name && this.post && this.date) {
          let newWorker = {
            id: Math.floor(Math.random() * 10000000),
            name: this.name,
            position: this.post,
            date: this.date
          };
          eventBus.$emit("addNewWorker", newWorker);
          this.name = null;
          this.post = null;
          this.date = null;
          this.$emit("closeTab", "");
        } else {
          if (!this.name) this.errors.push("Поле ФИО обязательно.");
          if (!this.post) this.errors.push("Поле должность обязательно.");
          if (!this.date) this.errors.push("Поле дата рождения обязательно.");
        }
      } else {
        if (this.name && this.post && this.date) {
          let replaceWorker = {
            id: null,
            name: this.name,
            position: this.post,
            date: this.date
          };
          this.$emit("checkValue", replaceWorker);
          this.name = null;
          this.post = null;
          this.date = null;
          // this.$emit("closeTab", "");
        } else {
          if (!this.name) this.errors.push("Поле ФИО обязательно.");
          if (!this.post) this.errors.push("Поле должность обязательно.");
          if (!this.date) this.errors.push("Поле дата рождения обязательно.");
        }
      }
    },
    addNewPosition() {
      let newOneWorker = this.newPosition;
      eventBus.$emit("addPosition", newOneWorker);
      this.newPosition = null;
    }
  },
  components: {
    datepicker: window.vuejsDatepicker
  }
});
Vue.component("search-worker", {
  props: {
    users: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  template: `
<div>
<div>
    <label for="filtername">Найти сотрудника:</label>
    <input v-model="selected" id="filtername" type="text" />
	</div>
	<table>
	<tr v-for="post in filteredList" :key="post.id">
	<td>{{ post.name }}</td>
	<td>{{ post.position }}</td>
	<td>{{ post.date }}</td>
	</tr>
</table>
</div>
`,
  data() {
    return {
      key: this.users,
      selected: ""
    };
  },
  computed: {
    filteredList() {
      return this.key.filter(post => {
        return post.name.toLowerCase().includes(this.selected.toLowerCase());
      });
    }
  }
});
var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    workers: [
      {
        id: 1,
        name: "Иванов Иван Иванович",
        position: "developer",
        date: "11 may 1989"
      },
      {
        id: 2,
        name: "Иванов Иван Иванович",
        position: "developer",
        date: "11 may 1989"
      },
      {
        id: 3,
        name: "Иванов Иван Иванович",
        position: "developer",
        date: "11 may 1989"
      }
    ],
    positions: ["developer", "designer", "nurse", "teamlead"]
  },
  mounted() {
    eventBus.$on("addNewWorker", newWorker => {
      this.workers.push(newWorker);
    });
    eventBus.$on("addPosition", newOneWorker => {
      this.positions.push(newOneWorker);
    });
    eventBus.$on("editWorker", replaceWorker => {
      this.positions.push(replaceWorker);
    });
  }
});
