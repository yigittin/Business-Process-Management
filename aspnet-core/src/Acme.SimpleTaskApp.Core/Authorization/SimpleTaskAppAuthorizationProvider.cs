﻿using Abp.Authorization;
using Abp.Localization;
using Abp.MultiTenancy;

namespace Acme.SimpleTaskApp.Authorization
{
    public class SimpleTaskAppAuthorizationProvider : AuthorizationProvider
    {
        public override void SetPermissions(IPermissionDefinitionContext context)
        {
            context.CreatePermission(PermissionNames.Pages_Users, L("Users"));
            context.CreatePermission(PermissionNames.Pages_Users_Activation, L("UsersActivation"));
            context.CreatePermission(PermissionNames.Pages_Roles, L("Roles"));
            context.CreatePermission(PermissionNames.Pages_Tenants, L("Tanent"), multiTenancySides: MultiTenancySides.Host);
            context.CreatePermission(PermissionNames.Pages_Proje, L("Proje"));
            context.CreatePermission(PermissionNames.Pages_Gorev, L("Gorev"));
            context.CreatePermission(PermissionNames.Pages_Musteri, L("Musteri"));
            context.CreatePermission(PermissionNames.Pages_Developer, L("Developer"));
            context.CreatePermission(PermissionNames.Pages_Yonetici, L("Yonetici"));
            context.CreatePermission(PermissionNames.Pages_Deneme, L("Deneme"));
        }

        private static ILocalizableString L(string name)
        {
            return new LocalizableString(name, SimpleTaskAppConsts.LocalizationSourceName);
        }
    }
}
