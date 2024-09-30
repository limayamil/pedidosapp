// supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://thwvzycdimaortuaqxve.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRod3Z6eWNkaW1hb3J0dWFxeHZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc3MDY1NzcsImV4cCI6MjA0MzI4MjU3N30.hbtt7bikq3KL2NBMfZE-aBzWyj78b-qFdBiSJh4TkxY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);