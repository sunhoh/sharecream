'use client';
import React from "react";
import Image from "next/image";
import clsx from 'clsx';
import Modal from '@/shared/ui/modal/Modal'
import { useStore } from "@/shared/store/stores";

const Login = () => {
  const { setIsAuth } = useStore(state => state.auth);

  const onSubmit = (type: string) => {
    // if (type === 'naver') return alert('준비중...');
    // if (type === 'google') return (window.location.href = GOOGLE_OAUTH_URL);
  };

  return (
    <div onClick={()=>setIsAuth(false)}>
      <Modal>
        <h1 className="border text-[24px] font-bold">adCream</h1>
        <div className="border mt-4">
          <div className="flex flex-col gap-2">
          {[
            { type: 'naver', label: '네이버로 로그인', logo: '/media/naver.png' },
            { type: 'google', label: '구글로 로그인', logo: '/media/google.png' },
          ].map(({ type, label, logo }, index) => {
            return (
              <button
                key={index}
                className={clsx('border p-4 rounded-full flex items-center justify-center gap-2')}
                onClick={() => onSubmit(type)}
              >
                <Image src={logo} alt="" width={logo.includes('naver') ? 20 : 24} height={24} />
                <span className="text-[12px]">{label}</span>
              </button>
            );
          })}
        </div>
        </div>
      </Modal>
    </div>
  )
}

export default Login