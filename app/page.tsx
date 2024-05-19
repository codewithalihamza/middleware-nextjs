'use client';
import { cookies } from '@/config/cookies-config';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleLogout = () => {
    cookies.remove('token');
    router.push('/login');
  };

  return (
    <div className="container-home">
      {/* Header */}
      <header className="header-home">
        <div className="headerContent-home">
          <h1 className="title-home">MiddleWare</h1>
          <button onClick={handleLogout} className="logoutButton-home">Logout</button>
        </div>
      </header>

      {/* Main Content */}
      <div className="mainContent-home">
        Do You Know About Middleware? Comment Please
      </div>
    </div>
  );
}
