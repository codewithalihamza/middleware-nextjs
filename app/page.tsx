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
        <h2>Let's Watch</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod felis id lectus sollicitudin, a tincidunt sapien blandit. Fusce laoreet, libero a tincidunt mattis, felis mi iaculis ipsum, vitae fermentum quam neque in odio.
        </p>
        {/* Embedded YouTube Video */}
        <div className="videoWrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/jjtFxzyUMSE?si=esSuDlkVxbM-wbpD"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
