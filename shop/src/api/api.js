import request from '@/utils/request'

const AuthLoginByAccount='/auth/login'; //账号登录
export function authLoginByAccount(data) {
  return request({
    url: AuthLoginByAccount,
    method: 'post',
    data
  })
}

export const REFUND_LIST = '';
