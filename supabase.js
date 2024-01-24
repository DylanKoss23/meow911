import { createClient } from '@supabase/supabase-js'
import { useSupabaseUser } from './path/to/useSupabaseUser' 

let supabase

export function getSupabase() {
  if (!supabase) {
    supabase = createClient(
      process.env.VUE_APP_SUPABASE_URL,
      process.env.VUE_APP_SUPABASE_ANON_KEY
    )
  }
  return supabase
}

export function addEmployee() {
  return new Promise(async (resolve, reject) => {
    const form = document.getElementById('employeeForm')
    const employeeId = form.elements['employeeId'].value
    const employeeName = form.elements['employeeName'].value
    const salary = form.elements['salary'].value

    try {
      const supabase = getSupabase()
      const { data, error } = await supabase
        .from('employees')
        .upsert([{ employee_id: employeeId, employee_name: employeeName, salary: salary }], {
          onConflict: 'employee_id'
        })

      if (error) {
        console.error('Error adding employee:', error.message)
        reject(error)
      } else {
        console.log('Employee added successfully:', data)
        resolve(data)
      }
    } catch (error) {
      console.error('Error:', error.message)
      reject(error)
    }
  })
}