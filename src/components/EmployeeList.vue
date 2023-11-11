<template>
  <div>
    <h2 class="list-title">Employee List</h2>
    <button @click="openModal" class="add-button">Add Employee</button>
    <table class="employee-table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Experience</th>
          <th>Age</th>
          <th>Address</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(employee, index) in employees" :key="index">
          <td>{{ employee.firstName }}</td>
          <td>{{ employee.lastName }}</td>
          <td>{{ employee.experience }}</td>
          <td>{{ employee.age }}</td>
          <td>{{ employee.address }}</td>
          <td>
            <button class="edit-button" @click="editEmployee(index)">Edit</button>
            <button class="delete-button" @click="deleteEmployee(index)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal container -->
    <div v-if="showModal" class="modal-container" @click="closeModal">
      <!-- EmployeeForm component -->
      <div class="modal-content" @click.stop>
        <employee-form
          :employee="selectedEmployee"
          :editingIndex="editingIndex"
          @submit="handleSubmit"
        />
      </div>
    </div>
  </div>
</template>

<script>
import EmployeeForm from '@/components/EmployeeForm.vue';

export default {
  name: 'EmployeeList',
  components: {
    EmployeeForm,
  },
  data() {
    return {
      showModal: false,
      editingIndex: null,
    };
  },
  computed: {
    employees() {
      return this.$store.state.employees;
    },
    selectedEmployee() {
      return this.editingIndex !== null ? this.employees[this.editingIndex] : null;
    },
  },
  methods: {
    openModal() {
      // Set showModal to true to display the modal
      this.showModal = true;
      this.editingIndex = null;
    },
    closeModal() {
      // Set showModal to false to hide the modal
      this.showModal = false;
    },
    editEmployee(index) {
      // Set showModal to true to display the modal with editing data
      this.showModal = true;
      this.editingIndex = index;
    },
    deleteEmployee(index) {
      // Delete the employee or send a request to the server
      this.$store.commit('deleteEmployee', index);
    },
    handleSubmit(employee, editingIndex) {
      if (editingIndex === null) {
        // Add a new employee
        this.$store.commit('addEmployee', employee);
      } else {
        // Update an existing employee
        this.$store.commit('updateEmployee', { index: editingIndex, employee });
      }
      // Close the modal after form submission
      this.closeModal();
    },
  },
};
</script>

<style scoped>
/* EmloyeeList style */
.list-title {
  margin-bottom: 20px;
}

.employee-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.employee-table th, .employee-table td {
  padding: 10px;
}

.employee-table th {
  background-color: #4CAF50;
  color: white;
}

.edit-button, .delete-button {
  background-color: #008CBA;
  color: white;
  padding: 8px;
  border: none;
  cursor: pointer;
}

.delete-button {
  background-color: #f44336;
  margin-left: 5px;
}

/* Modal style */
.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container::before {
  content: '';
  display: inline-block;
  height: 100%;
  vertical-align: middle;
  margin-right: -0.25em;
}

.add-button {
  background-color: #008CBA;
  color: white;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  cursor: pointer;
}

.add-button:hover {
  background-color: #00506b;
}
</style>
