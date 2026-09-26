



const RegisterPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Create an Account</h2>
        
        {/* Ekhane tomar Registration Form ba components add korbe */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border rounded-md" 
              placeholder="Enter your name" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              className="w-full px-3 py-2 border rounded-md" 
              placeholder="Enter your email" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              className="w-full px-3 py-2 border rounded-md" 
              placeholder="Enter your password" 
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Register
          </button>
        </form>

      </div>
    </div>
  );
};

export default RegisterPage;