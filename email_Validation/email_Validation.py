email= input("Enter your email address: ")
if len(email) >=10:
    if email[0].isalpha():
        if email.count('@') == 1:
            if email.count('.') >= 1:
                if email.index('@') < email.index('.'):
                    if email.index('@') > 0:
                        if email.index('.') < len(email)-1:
                            print("Valid Email Address")
                        else:
                            print("Wrong email address Error 06")
                            exit()
                    else:
                        print("Wrong email address Error 05")
                        exit()
                else:
                    print("Wrong email address Error 04")
                    exit()
            else:
                print("Wrong email address Error 03")
                exit()
        else:
            print("Wrong email address Error 02")
            exit()
else:
    print("Wrong email address Error 01")
    exit()