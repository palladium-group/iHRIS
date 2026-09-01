<template>
  <div class="home">
    <v-container v-if="$store.state.user.loggedin">
      <v-card elevation="1">
        <v-card-title class="primary darken-1 white--text font-weight-bold justify-center">
          <v-icon class="mr-2" color="white">{{ selectedIcon }}</v-icon>
          {{ $t(`App.menu.${selectedTitle}`) }}
        </v-card-title>
        <div class="pa-2 grid" >
          <v-layout wrap class="item" v-for="(data,index) in nestedNav " :key="index">
          <v-flex  >
            <v-card   class="md ma-1 content" rounded>
              <v-card-title
                    prepend-icon="item.icon"
                    :style="{ backgroundColor:data[Object.keys(data)[0]].color?data[Object.keys(data)[0]].color:defaultColor }"
                    class="white--text subtitle justify-center font-weight-bold  pa-1"
                    dark
                >
                  <v-icon class="mr-2" dark>{{ data[Object.keys(data)[0]].icon }}</v-icon>
                {{ $t(`App.menu.${data[Object.keys(data)[0]].text}`) }}
                </v-card-title>
                <div v-html="renderNestedList(data)"></div>
            </v-card>
          </v-flex>
              </v-layout>
          <v-layout wrap class="item" v-for="(item) in menu" :key="item.id">
            <v-flex :key="item.id" >
              <v-card
                  :to="item.url"
                  class="md ma-1 content"
                  link
                  rounded
              >
                <v-card-title
                    :prepend-icon="item.icon"
                    :style="{ backgroundColor: item.color ? item.color : defaultColor }"
                    class="white--text subtitle justify-center font-weight-bold  pa-1"
                    dark
                >
                  <v-icon class="mr-2" dark>{{ item.icon }}</v-icon>
                  {{ $t(`App.menu.${item.text}`) }}
                </v-card-title>
                <v-card-text v-if="item.description" align="justify"
                             class="text-subtitle-2 text--black font-weight-medium pa-2 ">
                  {{ $t(`App.menu.${item.description}`) }}
                </v-card-text>
                <v-card-text v-else align="justify"
                             class="text-subtitle-2 text--black font-weight-medium pa-2 ">
                             {{ $t(`App.menu.${item.text}`) }}
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </div>
      </v-card>
    </v-container>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "menu-grid-view",
  props: ["nav"],
  mounted: function () {
     this.$nextTick(() => {
      this.resizeAllGridItems();
      window.addEventListener('resize', this.resizeAllGridItems);
      this.items = this.$el.getElementsByClassName('item');
    });
    this.updateMenu()
  },
  watch: {
    nav: {
      handler() {
        this.updateMenu()
      },
      deep: true
    }
  },
  data: function () {
    return {
      menu: [],
      selectedNav: [],
      selectedIcon: "",
      selectedTitle: "",
      defaultColor: "#0277BD",
      outputObj: {},
      nestedNav: [],
    }
  },
  methods: {
    resizeGridItem(item) {
      const grid = this.$el.getElementsByClassName('grid')[0];
      const rowHeight = parseInt(getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
      const rowGap = parseInt(getComputedStyle(grid).getPropertyValue('grid-row-gap'));
      const rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
      item.style.gridRowEnd = `span ${rowSpan}`;
    },
    resizeAllGridItems() {
      this.items = this.$el.getElementsByClassName('item');
      for (let x = 0; x < this.items.length; x++) {
        this.resizeGridItem(this.items[x]);
      }
    },
    updateMenu: function () {
      if (this.$route?.params?.id) {
        let id = this.$route?.params?.id
        if (!this.nav.menu[id]) {
          this.$router.push("/")
        } else {

          this.selectedIcon = this.nav.menu[id].icon
          this.selectedTitle = this.nav.menu[id].text
          this.selectedNav = this.nav.menu[id].menu
          this.menu = []
          this.nestedNav = []
          for (let menu_id of Object.keys(this.selectedNav)) {
            if (this.selectedNav[menu_id].menu) {
              let menu = {[menu_id]: this.selectedNav[menu_id]}
              this.nestedNav.push(this.cloneWithoutMenu(menu))
              this.recursive(menu, "")
            } else {
              let entry = {}
              entry = {
                id: menu_id,
                text: this.selectedNav[menu_id].text,
                order: this.selectedNav[menu_id].order,
                url: this.selectedNav[menu_id].url,
                icon: this.selectedNav[menu_id].icon,
                color: this.selectedNav[menu_id].color
              }
              if (this.selectedNav[menu_id]?.description) {
                entry.description = this.selectedNav[menu_id].description
              }
              if (this.nav.active === menu_id) {
                entry.active = true
              } else {
                entry.active = false
              }
              this.menu.push(entry)
            }
          }
          this.menu.sort((a, b) => this.orderCompare(a.order, b.order, a.text, b.text))
          this.nestedNav.sort((a, b) => {
            let ka = Object.keys(a)[0]
            let kb = Object.keys(b)[0]
            return this.orderCompare(a[ka].order, b[kb].order, a[ka].text, b[kb].text)
          })
        }
      }
    },
    // order takes precedence; items with no order sort after those that have
    // one; ties (including both missing) fall back to alphabetical by the
    // translated label. Shared by every menu level rendered on this page.
    orderCompare: function (orderA, orderB, textA, textB) {
      let numA = Number(orderA)
      let numB = Number(orderB)
      let hasA = orderA !== undefined && orderA !== null && !isNaN(numA)
      let hasB = orderB !== undefined && orderB !== null && !isNaN(numB)
      if (hasA && hasB) {
        if (numA !== numB) return numA - numB
      } else if (hasA !== hasB) {
        return hasA ? -1 : 1
      }
      return this.$t(`App.menu.${textA}`).localeCompare(this.$t(`App.menu.${textB}`))
    },
    recursive: function (obj, name) {
      for (let key in obj) {
        if (typeof obj[key] == "object") {
          this.recursive(obj[key], name + "_" + key);
        } else {
          this.outputObj[name + "_" + key] = obj[key];
        }
      }
    },
    renderNestedList: function (data) {
      let exclude = ["text", "url", "order","icon","color"]
      let result = '<ul  style=" list-style: none; font-weight: 600 font-size: 0.875rem;line-height: 1.5 text-transform: capitalize">';
      let keys = Object.keys(data)
        .filter((key) => data.hasOwnProperty(key) && !exclude.includes(key))
        .sort((a, b) => this.orderCompare(data[a]?.order, data[b]?.order, data[a]?.text, data[b]?.text))
      for (let key of keys) {
        if (data.hasOwnProperty(key)) {
          if (!exclude.includes(key)) {
            if (data[key]?.url) {
              result += `<i aria-hidden="true" class="v-icon notranslate mr-2 blue--text mdi mdi-link"></i><a style="text-decoration: none" @onclick="event.preventDefault();" href="${data[key].url}">` + this.$t(`App.menu.${data[key]?.text}`) + `</a><br>`
              } else {
              result +='<li class=" text-subtitle-2 text--black font-weight-medium pa-0" style="list-style: none">' + `<i aria-hidden="true" class="v-icon teal--text notranslate mr-2 mdi ${data[key]?.icon}"></i>`  + this.$t(`App.menu.${data[key]?.text}`)
              if (typeof data[key] === 'object') {
                result += this.renderNestedList(data[key]);
              }
              result += '</li>';
            }
          }
        }
      }
      result += '</ul>';
      return result;
    },
    cloneWithoutMenu: function (v) {
      if (typeof v !== "object") return v;
      let c = {};
      for (let k in v) {
        if (k !== 'menu') c[k] = this.cloneWithoutMenu(v[k]);
      }
      if (v['menu']) {
        for (let k in v['menu']) {
          if (k !== '0') c[k] = this.cloneWithoutMenu(v['menu'][k]);
        }
      }
      return c;
    }
  }
}
</script>
<style scoped>
ul {
  list-style:none ;
}
.grid {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: 20px;
}
@media (min-width: 599px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 960px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
