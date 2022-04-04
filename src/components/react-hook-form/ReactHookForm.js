import React, { useRef } from 'react'
import { useForm } from "react-hook-form";

import 'components/scss/react-hook-form.scss';
import { BusinessLicenseInput, CorporateFile, CorporateName, EmailInput, EmployerName, PasswordCheckInput, PasswordInput, PhoneNumber, RecommendCode } from './JoinInputs';

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  const password = useRef({});
  password.current = watch("password", "");

  return (
    <div>
      <h1>React-hook-form 유효성 검사</h1>

      <div className='hookForm'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <EmailInput label="이메일주소(ID)*" register={register} required />
          {errors.email && <p>{errors.email.message}</p>}

          <PasswordInput label="비밀번호*" register={register} required/>
          {errors.password && <p>{errors.password.message}</p>}

          <PasswordCheckInput label="비밀번호 확인*" register={register} currentPassword={password.current} required/>
          {errors.passwordCheck && <p>{errors.passwordCheck.message}</p>}


          <BusinessLicenseInput label="사업자등록번호*" register={register} required />
          {errors.license && <p>{errors.license.message}</p>}

          <CorporateName label="기업체명*" register={register} required/>
          {errors.corporateName && <p>{errors.corporateName.message}</p>}

          <CorporateFile label="사업자등록증 첨부*" register={register} required/>
          {errors.coporateFile && <p>{errors.coporateFile.message}</p>}

          <EmployerName label="인사담당자명*" register={register} required/>
          {errors.employerName && <p>{errors.employerName.message}</p>}

          <PhoneNumber label="휴대폰번호*" register={register} required/>

          <RecommendCode label="추천인 코드" register={register} required/>
          {errors.recommendCode && <p>{errors.recommendCode.message}</p>}

          <input type="submit" value="submit"/>
        </form>
      </div>
    </div>
  )
}

export default ReactHookForm;