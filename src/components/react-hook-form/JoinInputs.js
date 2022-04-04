import React from 'react'

const EmailInput = ({ label, register, required }) => (
  <>
    <label>{label}</label>
    <input {...register("email", { 
      required: "필수 입력 항목입니다.",
      pattern: {
        value: /^[a-z0-9-_.]*\@([a-z0-9]+|[a-z0-9]+\.)([a-z0-9-]){1,62}\.([a-z0-9]+|[a-z0-9]+\.[a-z0-9]+)$/,
        message: "이메일 형식이 올바르지 않습니다"
      }
    })} 
    />
  </>
);

const PasswordInput = ({label, register, required}) => (
  <>
    <label>{label}</label>
    <input type="password" {...register("password", {
      required: "필수 입력 항목입니다.",
      pattern: {
        value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!"#$%&'()*+,\-./:;<=>?@\[\]^_`{|}~\\])[a-zA-Z\d!"#$%&'()*+,\-./:;<=>?@\[\]^_`{|}~\\]{8,}$/,
        message: "비밀번호 형식이 올바르지 않습니다"
      }
    })}
    />
  </>
)

const PasswordCheckInput =({label, register, required, currentPassword}) => (
  <>
    <label>{label}</label>
    <input type="password" {...register("passwordCheck", {
      required: "필수 입력 항목입니다.",
      validate: value =>
      value === currentPassword || "비밀번호가 일치하지 않습니다."
    })}
    />
  </>
)

const BusinessLicenseInput = ({label, register, required}) => (
  <>
    <label>{label}</label>
    <input type="text" {...register("license", {
      required: "필수 입력 항목입니다.",
      pattern: {
        value: /^(([0-9]{10})|([0-9]{14}))$/,
        message: "사업자등록 번호 형식이 올바르지 않습니다."
      }
    })}
    />
  </>
)

const CorporateName = ({label, register, required}) => (
  <>
    <label>{label}</label>
    <input type="text" {...register("corporateName", {
      required: "필수 입력 항목입니다.",
      maxLength: {
        value: 36,
        message: "36자 이내로 작성해주시기 바랍니다."
      }
    })}
    />
  </>
)

const CorporateFile = ({label, register, required}) => (
  <>
    <label>{label}</label>
    <input 
      type="file" {...register("coporateFile", {
        required: "필수 입력 항목입니다.",
        validate:  {
          type : (value) => 
          value[0].type === 'image/jpeg' ||  value[0].type === 'image/jpg' ||
          value[0].type === 'image/png' || value[0].type === 'image/pdf'
          || "파일 형식이 맞지 않습니다.",
          size: (value) => value[0].size <= 10000000 || "10MB 이하 파일 크기만 첨부해주세요."
        }
      })}
    />
  </>
)

const EmployerName = ({label, register, required}) => (
  <>
    <label>{label}</label>
    <input
      type="text" {...register("employerName", {
        required: "필수 입력 항목입니다.",
        maxLength: {
          value: 36,
          message: "36자 이내로 작성해주시기 바랍니다."
        } 

      })}

    />
  </>
)

const PhoneNumber = ({ name, label }) => (
  <>
    <label>{label}</label>
    <select name={name}>
      <option value="대한민국">대한민국 +82</option>
      <option value="미국">미국 +1</option>
      <option value="이집트">이집트 +20</option>
    </select>
  </>
)

const RecommendCode = ({ label, register }) => (
  <>
    <label>{label}</label>
    <input 
      type="text" {...register("recommendCode", {
        pattern : {
          value: /^[a-zA-Z0-9]{16}$/,
          message: "추천인 코드가 형식이 올바르지 않습니다."
        }
      })}

    />
  
  </>
)

export { 
  EmailInput, 
  PasswordInput, 
  PasswordCheckInput, 
  BusinessLicenseInput, 
  CorporateName, 
  CorporateFile, 
  EmployerName,
  PhoneNumber,
  RecommendCode
};