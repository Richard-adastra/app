import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/router';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function Home() {
  const router = useRouter();
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session));
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => setSession(session));
    return () => listener.subscription.unsubscribe();
  }, []);

 // TEMPORARY: Always logged in
if (!session) {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Lead Generation Dashboard</h1>
      <nav className="flex gap-4 mb-6">
        <button onClick={() => router.push("/employee/dashboard")} className="px-4 py-2 bg-blue-600 text-white rounded">Employee</button>
        <button onClick={() => router.push("/admin/tasks")} className="px-4 py-2 bg-green-600 text-white rounded">Admin</button>
        <button onClick={() => router.push("/client/dashboard")} className="px-4 py-2 bg-purple-600 text-white rounded">Client</button>
      </nav>
    </div>
  );
}


  return (
    <div className='min-h-screen bg-gray-100 p-6'>
      <h1 className='text-2xl font-bold mb-4'>Lead Generation Dashboard</h1>
      <nav className='flex gap-4 mb-6'>
        <button onClick={() => router.push('/employee/dashboard')} className='px-4 py-2 bg-blue-600 text-white rounded'>Employee</button>
        <button onClick={() => router.push('/admin/tasks')} className='px-4 py-2 bg-green-600 text-white rounded'>Admin</button>
        <button onClick={() => router.push('/client/dashboard')} className='px-4 py-2 bg-purple-600 text-white rounded'>Client</button>
      </nav>
    </div>
  );
}

function Auth() {
  const [email, setEmail] = useState('');
  const handleLogin = async () => {
    await supabase.auth.signInWithOtp({ email });
    alert('Check your email for login link');
  };

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-50'>
      <h1 className='text-xl mb-4'>Login to Dashboard</h1>
      <input type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} className='border p-2 mb-4' />
      <button onClick={handleLogin} className='px-4 py-2 bg-blue-600 text-white rounded'>Send Magic Link</button>
    </div>
  );
}
