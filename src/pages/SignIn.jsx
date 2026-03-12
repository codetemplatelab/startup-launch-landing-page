import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, LogIn } from "lucide-react";
import AuthShell from "../components/AuthShell";

const initialState = { email: "", password: "" };

export default function SignIn() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const nextErrors = {};
    if (!form.email.trim()) {
      nextErrors.email = "Email is required";
    }

    if (!form.password.trim()) {
      nextErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      nextErrors.password = "Use at least 6 characters";
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      navigate("/dashboard");
    }
  };

  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to access your launch dashboard and analytics."
      pageName="Sign In"
      footer={
        <p className="text-xs text-white/50">
          New here? <Link to="/signup" className="text-white underline">Create an account</Link>
        </p>
      }
    >
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.2em] text-white/50">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-aurora"
            placeholder="you@company.com"
          />
          {errors.email ? <p className="text-xs text-rose-300">{errors.email}</p> : null}
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.2em] text-white/50">Password</label>
          <div className="flex items-center rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <input
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={(event) => setForm({ ...form, password: event.target.value })}
              className="w-full bg-transparent text-sm text-white outline-none"
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="text-white/60"
              aria-label="Toggle password visibility"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {errors.password ? <p className="text-xs text-rose-300">{errors.password}</p> : null}
        </div>
        <div className="flex items-center justify-between text-xs text-white/60">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-aurora" />
            Remember me
          </label>
          <button type="button" className="text-white underline">
            Forgot password?
          </button>
        </div>
        <button type="submit" className="btn-primary w-full">
          Sign In
          <LogIn size={16} />
        </button>
      </form>
    </AuthShell>
  );
}
