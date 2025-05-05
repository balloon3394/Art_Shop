<template>
  <div id="pratice">
    <h1>{{ msg }}</h1>
    <h2 v-for="(car,index) in cars" :key="index">{{ index }} : {{ car.name }}</h2>
    <h2 v-for="(p,index) in person" :key="index">{{ employeePO(p.name,p.position) }}</h2>
  </div>
  <div>
    <h2>Add Cat</h2>
    <input v-model="newcatname" placeholder="Cat Name" type="text">
    <input v-model="newcatage" placeholder="Cat Age" type="number">
    <input v-model="newcatcolor" placeholder="Cat Color" type="text">
    <button @click="addcat(newcatname,newcatage,newcatcolor)">Add</button>
  </div>
  <div>
    <ul>
      <li v-for="cat in cats" :key="cat.name">
        {{ cat.name }} {{ cat.age }} years old - color is {{ cat.color }}
      </li>
    </ul>

  </div>

</template>

<script>
export default {
  data () {
    return {
      newcatname: '',
      newcatage: '',
      newcatcolor: '',
      msg: 'This is practice page.',
      cars: [
        { name: 'toyota67', model: '400', price: 450000 },
        { name: 'bmw1969', model: '103', price: 1600000 }
      ],
      person: [
        { name: 'jojo', salary: 20000, position: 'programmer' },
        { name: 'hottom', salary: 15000, position: 'HR' },
        { name: 'kitty', salary: 18000, position: 'QC' }
      ],
      cats: []
    }
  },
  methods: {
    employeePO (name, po) {
      return 'name : ' + name + '\n' + ' position is ' + po
    },
    addcat (name, age, color) {
      this.cats.push({ name, age, color })
      this.newcatname = ''
      this.newcatage = ''
      this.newcatcolor = ''
    }
  }
}
</script>
