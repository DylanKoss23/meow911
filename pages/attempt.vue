<script>
import { createSupabase } from './supabaseClient' 
export default { data() { return { employeeId: '', employeeName: '', salary: null } }, created() { this.supabase = createSupabase() }, methods: { addEmployee() { this.supabase.addEmployee(this.employeeId, this.employeeName, this.salary); } } } </script>