<template>
  <div class="form">
    <h2 class="form-title">Employee Form</h2>
    <form @submit.prevent="submitForm" class="form-container">
      <label class="form-lable" for="firstName">First Name</label>
      <input type="text" v-model="localEmployee.firstName" required>

      <label class="form-lable" for="lastName">Last Name</label>
      <input type="text" v-model="localEmployee.lastName" required>

      <label class="form-lable" for="experience">Experience (years)</label>
      <input type="number" v-model="localEmployee.experience" required>

      <label class="form-lable" for="age">Age</label>
      <input type="number" v-model="localEmployee.age" required>

      <label class="form-lable" for="address">Address</label>
      <input type="text" v-model="localEmployee.address" required>

      <button type="submit" class="submit-button">{{ editingIndex === null ? 'Add' : 'Update' }}</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EmployeeForm',
  props: {
    employee: Object, // The employee data to edit
    editingIndex: Number, // The index of the employee being edited
  },
  data() {
    return {
      // Create a local copy of the employee prop
      localEmployee: { ...this.employee },
    };
  },
  watch: {
    // Watch for changes in the passed employee data
    employee: {
      handler(newEmployee) {
        // Update the local copy when the prop changes
        this.localEmployee = { ...newEmployee };
      },
      deep: true,
    },
  },
  methods: {
    submitForm() {
      // Emit an event to notify the parent component about the form submission
      this.$emit('submit', this.localEmployee, this.editingIndex);

      // Clear the form after submitting data
      this.localEmployee = {
        firstName: '',
        lastName: '',
        experience: '',
        age: '',
        address: '',
      };
    },
  },
};
</script>

<style scoped>
/* EmployeeForm style */
.form {
  background-color: rgb(255, 255, 255);
  padding: 20px;
  border-radius: 10px;
}

.form-container {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
}
.form-lable {
  text-align: left;
  margin: 5px 0;
}

input{
  border: none;
  border-bottom: 1px solid rgb(63, 63, 63);
  outline: none;
  font-size: 18px;
  line-height: 1;
  background: transparent;
}

input:focus{
  outline: none;
}
.submit-button {
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  margin-top: 10px;
  border: none;
  cursor: pointer;
}
</style>