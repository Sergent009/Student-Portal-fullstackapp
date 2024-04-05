<template>
    <nav>
        <img
        class="UOKlogo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeGsYWxz_BVyQta9BQMzCUwjxbBadyjR05DZhKH6-98g&s"
      />
        <h1>HOD Names</h1>
  </nav>

    <table class="data">
    <thead>
        <tr>
            <th>No.</th>
            <th>HOD Name</th>
            <th>Department</th>
            <th>Age</th>
        </tr>
    </thead>

    <tbody>
        <tr v-for="(info,index) in data" :key="index">
            <td>{{info.id}}</td>
            <td>{{info.hodName}}</td>
            <td>{{info.department}}</td>
            <td>{{info.age}}</td>
        </tr>
    </tbody>
    </table>

</template>

<script>
export default {
data(){
    return{
        data:[
        { id: 1, hodName: 'Dr. Ali Khan', department: 'Department of Computer Science', age: 62 },
        { id: 2, hodName: 'Prof. Sara Ahmed', department: 'Department of Physics', age: 45 },
        { id: 3, hodName: 'Dr. Asim Khan', department: 'Department of Methamatics', age:  51},
        { id: 4, hodName: 'Dr. Farhana Shah', department: 'Department of Chemistry', age: 46 },
        { id: 5, hodName: 'Prof. Zainab Siddique', department: 'Department of Economics', age: 49 },
        { id: 6, hodName: 'Dr. Amir Khan', department: 'Department of History', age: 39 },
        { id: 7, hodName: 'Dr. Farhan Ali', department: 'Department of Psychology', age: 44 },
        { id: 8, hodName: 'Prof. Sara Ahmed', department: 'Department of Business Administration', age: 53 },
        { id: 9, hodName: 'Dr.Fatima Abbas', department: 'Department of Environmental Sciences', age: 56 }
        ]
    }
}
}
</script>

<style>

nav {
  width: 100%;
  height: 8%;
  position: absolute;
  top: 0;
  left: 0;
  color: black;
  box-shadow: 0 0 5px 2px black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Rubik", sans-serif;
}

.UOKlogo {
  width: 10vh;
  height: 5vh;
  position: absolute;
  top: 2vh;
  left: 3vh;
}

.UOKlogo:hover {
  cursor: pointer;
}

.data {
  position: relative;
  top: 20vh;
  font-family: "Rubik", sans-serif;
  border-collapse: collapse; /* Add this line to collapse borders */
  width: 100%;
}

.data th, .data td {
  border: 1px solid black; /* Add borders to table cells */
  padding: 8px; /* Add padding for better spacing */
}

.data th {
  background-color: #f2f2f2; /* Add background color for table header */
}

.data tr:nth-child(even) {
  background-color: #f2f2f2; /* Add background color for even rows */
}

</style>