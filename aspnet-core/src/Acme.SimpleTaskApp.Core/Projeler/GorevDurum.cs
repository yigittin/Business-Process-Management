﻿using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Acme.SimpleTaskApp.Projeler
{
    public class GorevDurum : FullAuditedEntity
    {
        public string GorevDurumu { get; set; }
    }
}
