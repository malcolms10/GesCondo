'use client'
import { Button, Form, Input, message } from "antd";
import { getAntdRequiredFieldRule } from "@/helpers/validations";
import { useForm } from "antd/lib/form/Form";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Login() {
    // Usar o useform apenas do lado do cliente
    const [form] = typeof window !== "undefined" ? useForm() : [null];
    const router = useRouter();

    const [loading, setLoading] = useState(false)

    const onLogin = async (values: userType) => {
      try {
        setLoading(true);
        message.success("Sucesso");
        router.push("/pages/Dashboard");
      } catch (error:any) {
        message.error(error.response.data.message)
      }
      finally{
        setLoading(false)
      }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
            {/*lado esquerdo*/}
          <div className="h-full bg-primary hidden md:flex items-center justify-center">
            <h1 className="text-4xl text-second">GESKILA</h1>
          </div>
    
            {/*lado direito*/}
          <div className="flex justify-center items-center h-full">
            <Form
              form={form}
              className="w-[60%] flex flex-col gap-5"
              layout="vertical"
              onFinish={onLogin}
            >
              <h1 className="font-bold text-2xl">Login</h1>
              <hr />
    
              <Form.Item name="user" label="Utilizador"
                 rules={getAntdRequiredFieldRule("Usuário ou palavra-Passe inválidos")}
              >
                <Input type="text" />
              </Form.Item>
              <Form.Item name="Palavra-passe" label="Palavra-passe"
                rules={getAntdRequiredFieldRule("Usuário ou palavra-Passe inválidos")}
              >
                <Input type="password" />
              </Form.Item>
              <Button className="h-[45px] rounded-md text-white bg-primary hover:text-primary hover:bg-white" htmlType="submit" block >
                Entrar
              </Button>
            </Form>
          </div>
          {/** Copyright */}
          <div className="absolute bottom-0 right-0 p-4 text-gray-500">
            &copy; {new Date().getFullYear()} Itoshi&apos;s
          </div>
        </div>
      );
}
