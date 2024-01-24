export function createSupabase() {
  const SUPABASE_URL = "https://nbihggzybcjehggxzdkp.supabase.co/";
  const SUPABASE_API_KEY = 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5iaWhnZ3p5YmNqZWhnZ3h6ZGtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU1MDc1NTMsImV4cCI6MjAyMTA4MzU1M30.wOcOFPxJwzlSpJ6FCthDI60PDOjWOd-yBqH5nzJaYBg";

  return supabase.createClient(SUPABASE_URL, SUPABASE_API_KEY);
}