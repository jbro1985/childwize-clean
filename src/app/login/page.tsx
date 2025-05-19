import LoginForm from '../../components/LoginForm';

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl mb-4">Login</h1>
      <LoginForm />
    </div>
  );
}
