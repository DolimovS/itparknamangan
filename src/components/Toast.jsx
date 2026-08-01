import { CheckCircle2, XCircle } from 'lucide-react'
import { useToast } from '../context/ToastContext'

export default function Toast() {
  const { toast } = useToast()

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[92%] max-w-sm transition-all duration-450 ${
        toast ? 'translate-y-0 opacity-100' : 'translate-y-[140%] opacity-0 pointer-events-none'
      }`}
    >
      {toast && (
        <div className="flex items-start gap-3 bg-ink text-white rounded-2xl shadow-2xl px-5 py-4">
          <span
            className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
              toast.variant === 'error' ? 'bg-red-500' : 'bg-primary'
            }`}
          >
            {toast.variant === 'error' ? (
              <XCircle size={16} color="white" />
            ) : (
              <CheckCircle2 size={16} color="white" />
            )}
          </span>
          <div>
            <p className="font-display font-semibold text-sm">{toast.title}</p>
            <p className="text-white/60 text-[13px] mt-0.5">{toast.message}</p>
          </div>
        </div>
      )}
    </div>
  )
}
