import { createStore } from 'vuex';

export default createStore({
  state: {
    employees: [],
    editingIndex: null,
  },
  mutations: {
    addEmployee(state, employee) {
      state.employees.push(employee);
    },
    updateEmployee(
      state,
      { index, employee }
    ) {
      state.employees[index] = employee;
      state.editingIndex = null;
    },
    deleteEmployee(state, index) {
      state.employees.splice(index, 1);
    },
    startEdit(state, index) {
      state.editingIndex = index;
    },
  },
  getters: {
    getEmployees: (state) =>
      state.employees,
    getEditingIndex: (state) =>
      state.editingIndex,
  },
});
