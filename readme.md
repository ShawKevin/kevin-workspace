

> 参考地址
> https://dev.to/vinomanick/create-a-monorepo-using-pnpm-workspace-1ebn

# 初始化



## GIT 篇

`git 路径 ～/.ssh`

1. 生成不同仓库的 SSH

```# 公司仓库
# 公司仓库 SSH Key
ssh-keygen -t rsa -b 4096 -C "you@company.com" -f ~/.ssh/id_rsa_company

# GitHub SSH Key
ssh-keygen -t rsa -b 4096 -C "you@github.com" -f ~/.ssh/id_rsa_github
```

2. 配置不同的ssh规则
   ```
   # 公司仓库
   Host company-git
     HostName git.company.com
     User git
     IdentityFile ~/.ssh/id_rsa_company
   
   # GitHub
   Host github
     HostName github.com
     User git
     IdentityFile ~/.ssh/id_rsa_github
   ```

3. 测试联通性
   ```ssh
   # 测试公司仓库
   ssh -T git@company-git
   
   # 测试 GitHub
   ssh -T git@github
   ```

   

