/* GestãoOS v4.0 — i18n + Temas + Mobile */
'use strict';

// ══════════════════════════════════════════
// TRADUÇÕES
// ══════════════════════════════════════════
const LANGS = {
  'pt-BR': {
    dashboard:'Dashboard', financeiro:'Financeiro', dre:'DRE', fluxo:'Fluxo de caixa',
    estoque:'Estoque', funcionarios:'Funcionários', clientes:'Clientes',
    fornecedores:'Fornecedores', cardapio:'Cardápio', fiscal:'Fiscal',
    metas:'Metas', relatorios:'Relatórios', config:'Configurações',
    principal:'Principal', operacional:'Operacional', financeiro_g:'Financeiro', analise:'Análise', sistema:'Sistema',
    novo_lancamento:'Novo lançamento', novo_item:'Novo item', novo_funcionario:'Novo funcionário',
    novo_cliente:'Novo cliente', novo_fornecedor:'Novo fornecedor', novo_fiscal:'Nova obrigação', nova_meta:'Nova meta',
    receita:'Receita', despesa:'Despesa', receitas:'Receitas', despesas:'Despesas', saldo:'Saldo',
    salvar:'Salvar', cancelar:'Cancelar', excluir:'Excluir', editar:'Editar', fechar:'Fechar',
    nome:'Nome', descricao:'Descrição', valor:'Valor', data:'Data', status:'Status', tipo:'Tipo',
    ativo:'Ativo', inativo:'Inativo', pago:'Pago', pendente:'Pendente', aberto:'Aberto',
    buscar:'Buscar...', todos:'Todos', todas:'Todas',
    visao_geral:'Visão geral do negócio', lucro:'Lucro líquido', margem:'Margem',
    folha:'Folha de pagamento', ativos:'Ativos', ferias:'Férias', afastado:'Afastado', demitido:'Demitido',
    cargo:'Cargo', salario:'Salário', admissao:'Admissão', telefone:'Telefone',
    total_gasto:'Total gasto', ultima_visita:'Última visita', visitas:'Visitas',
    preco:'Preço venda', custo:'Custo', margem_label:'Margem', categoria:'Categoria',
    vencimento:'Vencimento', pago_em:'Pago em', urgente:'Urgente', em_atraso:'em atraso', hoje:'Hoje',
    qtd_atual:'Qtd. atual', qtd_minima:'Qtd. mínima', custo_unit:'Custo unitário',
    unidade:'Unidade', valor_estoque:'Valor em estoque',
    meta_valor:'Valor meta', valor_atual:'Valor atual', prazo:'Prazo', dias_restantes:'dias restantes',
    atingida:'Atingida', em_progresso:'Em progresso', atencao:'Atenção',
    proprietario:'Proprietário', modo_demo:'Demo', online:'Online',
    tema:'Tema', idioma:'Idioma', moeda:'Moeda', periodo:'Período',
    tema_escuro:'Escuro', tema_claro:'Claro', tema_ambiente:'Ambiente (Sistema)',
    salvo:'Salvo com sucesso!', erro:'Erro ao salvar', removido:'Removido com sucesso',
    confirmar:'Confirmar ação', acao_irreversivel:'Esta ação não pode ser desfeita.',
    nenhum_lancamento:'Nenhum lançamento encontrado', nenhum_item:'Nenhum item cadastrado',
    conectar_supabase:'Conectar e carregar dados', reconectar:'Recarregar', desconectar:'Desconectar',
    conectado:'Conectado ao Supabase', modo_demo_aviso:'Modo demonstração ativo. Dados salvos apenas neste navegador.',
    marcar_pago:'Marcar pago', pagar:'Pagar',
    estabelecimento:'Estabelecimento', novo_estabelecimento:'Novo estabelecimento',
    perfil:'Perfil do negócio', banco_dados:'Banco de dados',
    sem_dados:'Sem dados', carregando:'Carregando...',
    nível:'Nível', vip:'VIP', fiel:'Fiel', novo:'Novo',
    ticket_medio:'Ticket médio', total_faturado:'Total faturado',
    top_receitas:'Top receitas', top_despesas:'Top despesas',
    evolucao:'Evolução mensal', ranking_clientes:'Ranking de clientes',
    analise_cardapio:'Análise do cardápio',
  },
  'en': {
    dashboard:'Dashboard', financeiro:'Finance', dre:'P&L', fluxo:'Cash Flow',
    estoque:'Inventory', funcionarios:'Staff', clientes:'Customers',
    fornecedores:'Suppliers', cardapio:'Menu', fiscal:'Tax & Bills',
    metas:'Goals', relatorios:'Reports', config:'Settings',
    principal:'Main', operacional:'Operations', financeiro_g:'Financial', analise:'Analytics', sistema:'System',
    novo_lancamento:'New entry', novo_item:'New item', novo_funcionario:'New employee',
    novo_cliente:'New customer', novo_fornecedor:'New supplier', novo_fiscal:'New obligation', nova_meta:'New goal',
    receita:'Income', despesa:'Expense', receitas:'Income', despesas:'Expenses', saldo:'Balance',
    salvar:'Save', cancelar:'Cancel', excluir:'Delete', editar:'Edit', fechar:'Close',
    nome:'Name', descricao:'Description', valor:'Amount', data:'Date', status:'Status', tipo:'Type',
    ativo:'Active', inativo:'Inactive', pago:'Paid', pendente:'Pending', aberto:'Open',
    buscar:'Search...', todos:'All', todas:'All',
    visao_geral:'Business overview', lucro:'Net profit', margem:'Margin',
    folha:'Payroll', ativos:'Active', ferias:'On leave', afastado:'Away', demitido:'Dismissed',
    cargo:'Role', salario:'Salary', admissao:'Start date', telefone:'Phone',
    total_gasto:'Total spent', ultima_visita:'Last visit', visitas:'Visits',
    preco:'Sale price', custo:'Cost', margem_label:'Margin', categoria:'Category',
    vencimento:'Due date', pago_em:'Paid on', urgente:'Urgent', em_atraso:'overdue', hoje:'Today',
    qtd_atual:'Current qty', qtd_minima:'Min. qty', custo_unit:'Unit cost',
    unidade:'Unit', valor_estoque:'Stock value',
    meta_valor:'Goal value', valor_atual:'Current value', prazo:'Deadline', dias_restantes:'days left',
    atingida:'Achieved', em_progresso:'In progress', atencao:'Attention',
    proprietario:'Owner', modo_demo:'Demo', online:'Online',
    tema:'Theme', idioma:'Language', moeda:'Currency', periodo:'Period',
    tema_escuro:'Dark', tema_claro:'Light', tema_ambiente:'System',
    salvo:'Saved!', erro:'Error saving', removido:'Removed',
    confirmar:'Confirm action', acao_irreversivel:'This action cannot be undone.',
    nenhum_lancamento:'No entries found', nenhum_item:'No items found',
    conectar_supabase:'Connect & load data', reconectar:'Reload', desconectar:'Disconnect',
    conectado:'Connected to Supabase', modo_demo_aviso:'Demo mode. Data saved in browser only.',
    marcar_pago:'Mark as paid', pagar:'Pay',
    estabelecimento:'Branch', novo_estabelecimento:'New branch',
    perfil:'Business profile', banco_dados:'Database',
    sem_dados:'No data', carregando:'Loading...',
    nível:'Level', vip:'VIP', fiel:'Loyal', novo:'New',
    ticket_medio:'Avg. ticket', total_faturado:'Total revenue',
    top_receitas:'Top income', top_despesas:'Top expenses',
    evolucao:'Monthly trend', ranking_clientes:'Customer ranking',
    analise_cardapio:'Menu analysis',
  },
  'es': {
    dashboard:'Dashboard', financeiro:'Finanzas', dre:'P&G', fluxo:'Flujo de caja',
    estoque:'Inventario', funcionarios:'Personal', clientes:'Clientes',
    fornecedores:'Proveedores', cardapio:'Menú', fiscal:'Fiscal',
    metas:'Metas', relatorios:'Informes', config:'Configuración',
    principal:'Principal', operacional:'Operaciones', financeiro_g:'Financiero', analise:'Análisis', sistema:'Sistema',
    novo_lancamento:'Nuevo registro', novo_item:'Nuevo ítem', novo_funcionario:'Nuevo empleado',
    novo_cliente:'Nuevo cliente', novo_fornecedor:'Nuevo proveedor', novo_fiscal:'Nueva obligación', nova_meta:'Nueva meta',
    receita:'Ingreso', despesa:'Gasto', receitas:'Ingresos', despesas:'Gastos', saldo:'Saldo',
    salvar:'Guardar', cancelar:'Cancelar', excluir:'Eliminar', editar:'Editar', fechar:'Cerrar',
    nome:'Nombre', descricao:'Descripción', valor:'Valor', data:'Fecha', status:'Estado', tipo:'Tipo',
    ativo:'Activo', inativo:'Inactivo', pago:'Pagado', pendente:'Pendiente', aberto:'Abierto',
    buscar:'Buscar...', todos:'Todos', todas:'Todas',
    visao_geral:'Resumen del negocio', lucro:'Beneficio neto', margem:'Margen',
    folha:'Nómina', ativos:'Activos', ferias:'Vacaciones', afastado:'Ausente', demitido:'Despedido',
    cargo:'Cargo', salario:'Salario', admissao:'Ingreso', telefone:'Teléfono',
    total_gasto:'Total gastado', ultima_visita:'Última visita', visitas:'Visitas',
    preco:'Precio venta', custo:'Costo', margem_label:'Margen', categoria:'Categoría',
    vencimento:'Vencimiento', pago_em:'Pagado el', urgente:'Urgente', em_atraso:'en mora', hoje:'Hoy',
    qtd_atual:'Cant. actual', qtd_minima:'Cant. mínima', custo_unit:'Costo unitario',
    unidade:'Unidad', valor_estoque:'Valor inventario',
    meta_valor:'Valor meta', valor_atual:'Valor actual', prazo:'Fecha límite', dias_restantes:'días restantes',
    atingida:'Alcanzada', em_progresso:'En progreso', atencao:'Atención',
    proprietario:'Propietario', modo_demo:'Demo', online:'Online',
    tema:'Tema', idioma:'Idioma', moeda:'Moneda', periodo:'Período',
    tema_escuro:'Oscuro', tema_claro:'Claro', tema_ambiente:'Sistema',
    salvo:'¡Guardado!', erro:'Error al guardar', removido:'Eliminado',
    confirmar:'Confirmar acción', acao_irreversivel:'Esta acción no se puede deshacer.',
    nenhum_lancamento:'Sin registros', nenhum_item:'Sin elementos',
    conectar_supabase:'Conectar y cargar datos', reconectar:'Recargar', desconectar:'Desconectar',
    conectado:'Conectado a Supabase', modo_demo_aviso:'Modo demo. Datos guardados solo en el navegador.',
    marcar_pago:'Marcar pagado', pagar:'Pagar',
    estabelecimento:'Sucursal', novo_estabelecimento:'Nueva sucursal',
    perfil:'Perfil del negocio', banco_dados:'Base de datos',
    sem_dados:'Sin datos', carregando:'Cargando...',
    nível:'Nivel', vip:'VIP', fiel:'Fiel', novo:'Nuevo',
    ticket_medio:'Ticket medio', total_faturado:'Total facturado',
    top_receitas:'Top ingresos', top_despesas:'Top gastos',
    evolucao:'Tendencia mensual', ranking_clientes:'Ranking clientes',
    analise_cardapio:'Análisis del menú',
  },
  'fr': {
    dashboard:'Tableau de bord', financeiro:'Finance', dre:'Compte de résultat', fluxo:'Trésorerie',
    estoque:'Stock', funcionarios:'Personnel', clientes:'Clients',
    fornecedores:'Fournisseurs', cardapio:'Menu', fiscal:'Fiscal',
    metas:'Objectifs', relatorios:'Rapports', config:'Paramètres',
    principal:'Principal', operacional:'Opérations', financeiro_g:'Financier', analise:'Analyse', sistema:'Système',
    novo_lancamento:'Nouvelle entrée', novo_item:'Nouvel article', novo_funcionario:'Nouvel employé',
    novo_cliente:'Nouveau client', novo_fornecedor:'Nouveau fournisseur', novo_fiscal:'Nouvelle obligation', nova_meta:'Nouvel objectif',
    receita:'Revenu', despesa:'Dépense', receitas:'Revenus', despesas:'Dépenses', saldo:'Solde',
    salvar:'Sauvegarder', cancelar:'Annuler', excluir:'Supprimer', editar:'Modifier', fechar:'Fermer',
    nome:'Nom', descricao:'Description', valor:'Montant', data:'Date', status:'Statut', tipo:'Type',
    ativo:'Actif', inativo:'Inactif', pago:'Payé', pendente:'En attente', aberto:'Ouvert',
    buscar:'Rechercher...', todos:'Tous', todas:'Toutes',
    visao_geral:"Vue d'ensemble", lucro:'Bénéfice net', margem:'Marge',
    folha:'Masse salariale', ativos:'Actifs', ferias:'Congés', afastado:'Absent', demitido:'Licencié',
    cargo:'Poste', salario:'Salaire', admissao:"Date d'embauche", telefone:'Téléphone',
    total_gasto:'Total dépensé', ultima_visita:'Dernière visite', visitas:'Visites',
    preco:'Prix de vente', custo:'Coût', margem_label:'Marge', categoria:'Catégorie',
    vencimento:'Échéance', pago_em:'Payé le', urgente:'Urgent', em_atraso:'en retard', hoje:"Aujourd'hui",
    qtd_atual:'Qté actuelle', qtd_minima:'Qté minimale', custo_unit:'Coût unitaire',
    unidade:'Unité', valor_estoque:'Valeur stock',
    meta_valor:'Valeur cible', valor_atual:'Valeur actuelle', prazo:'Délai', dias_restantes:'jours restants',
    atingida:'Atteint', em_progresso:'En cours', atencao:'Attention',
    proprietario:'Propriétaire', modo_demo:'Démo', online:'En ligne',
    tema:'Thème', idioma:'Langue', moeda:'Devise', periodo:'Période',
    tema_escuro:'Sombre', tema_claro:'Clair', tema_ambiente:'Système',
    salvo:'Sauvegardé !', erro:'Erreur', removido:'Supprimé',
    confirmar:'Confirmer', acao_irreversivel:'Cette action est irréversible.',
    nenhum_lancamento:'Aucune entrée', nenhum_item:'Aucun article',
    conectar_supabase:'Connecter et charger', reconectar:'Actualiser', desconectar:'Déconnecter',
    conectado:'Connecté à Supabase', modo_demo_aviso:'Mode démo. Données sauvegardées dans le navigateur.',
    marcar_pago:'Marquer payé', pagar:'Payer',
    estabelecimento:'Établissement', novo_estabelecimento:'Nouvel établissement',
    perfil:"Profil de l'entreprise", banco_dados:'Base de données',
    sem_dados:'Aucune donnée', carregando:'Chargement...',
    nível:'Niveau', vip:'VIP', fiel:'Fidèle', novo:'Nouveau',
    ticket_medio:'Panier moyen', total_faturado:'Total facturé',
    top_receitas:'Top revenus', top_despesas:'Top dépenses',
    evolucao:'Tendance mensuelle', ranking_clientes:'Classement clients',
    analise_cardapio:'Analyse du menu',
  },
};

function t(key) { return (LANGS[CFG.lang] || LANGS['pt-BR'])[key] || key; }

// ══════════════════════════════════════════
// TEMAS
// ══════════════════════════════════════════
function applyTheme(theme) {
  const root = document.documentElement;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = theme === 'dark' || (theme === 'system' && prefersDark);
  CFG.theme = theme;

  if (isDark) {
    root.style.setProperty('--bg',          '#0f1117');
    root.style.setProperty('--surface',     '#1a1d27');
    root.style.setProperty('--border',      '#2d3144');
    root.style.setProperty('--border-dark', '#3d4160');
    root.style.setProperty('--text',        '#f1f5f9');
    root.style.setProperty('--text-2',      '#94a3b8');
    root.style.setProperty('--text-3',      '#64748b');
    root.style.setProperty('--sidebar',     '#0d1018');
    root.style.setProperty('--accent-light','#1e3a5f');
    root.style.setProperty('--accent-text', '#60a5fa');
    root.style.setProperty('--green-bg',    '#052e16');
    root.style.setProperty('--green',       '#4ade80');
    root.style.setProperty('--red-bg',      '#450a0a');
    root.style.setProperty('--red',         '#f87171');
    root.style.setProperty('--amber-bg',    '#451a03');
    root.style.setProperty('--amber',       '#fbbf24');
    root.style.setProperty('--purple-bg',   '#2e1065');
    root.style.setProperty('--input-bg',    '#252836');
    root.style.setProperty('--input-color', '#f1f5f9');
    document.body.setAttribute('data-theme', 'dark');
  } else {
    root.style.setProperty('--bg',          '#F8F9FA');
    root.style.setProperty('--surface',     '#ffffff');
    root.style.setProperty('--border',      '#E5E7EB');
    root.style.setProperty('--border-dark', '#D1D5DB');
    root.style.setProperty('--text',        '#111827');
    root.style.setProperty('--text-2',      '#6B7280');
    root.style.setProperty('--text-3',      '#9CA3AF');
    root.style.setProperty('--sidebar',     '#111827');
    root.style.setProperty('--accent-light','#EFF6FF');
    root.style.setProperty('--accent-text', '#1e40af');
    root.style.setProperty('--green-bg',    '#f0fdf4');
    root.style.setProperty('--green',       '#16a34a');
    root.style.setProperty('--red-bg',      '#fef2f2');
    root.style.setProperty('--red',         '#dc2626');
    root.style.setProperty('--amber-bg',    '#fffbeb');
    root.style.setProperty('--amber',       '#d97706');
    root.style.setProperty('--purple-bg',   '#f5f3ff');
    root.style.setProperty('--input-bg',    '#ffffff');
    root.style.setProperty('--input-color', '#111827');
    document.body.setAttribute('data-theme', 'light');
  }
}

// ══════════════════════════════════════════
// SUPABASE + AUTH
// ══════════════════════════════════════════
let supa = null;
let AUTH_USER = null;

async function initSupa() {
  if (!CFG.url || !CFG.key) return false;
  try {
    const { createClient } = await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm');
    supa = createClient(CFG.url, CFG.key);
    const { error } = await supa.from('estabelecimentos').select('id').limit(1);
    if (error) throw error;
    CFG.ok = true; saveCFG(); setConnUI(true); return true;
  } catch(e) { supa = null; CFG.ok = false; setConnUI(false); return false; }
}

function setConnUI(ok) {
  document.querySelectorAll('.conn-dot').forEach(d => d.className = 'conn-dot ' + (ok?'dot-ok':'dot-off'));
  document.querySelectorAll('.conn-label').forEach(l => l.textContent = ok ? t('online') : t('modo_demo'));
}

async function signIn(email, password) {
  if (!supa) return { error: 'Sem conexão com Supabase' };
  const { data, error } = await supa.auth.signInWithPassword({ email, password });
  if (error) return { error: error.message };
  AUTH_USER = data.user; return { user: data.user };
}

async function signUp(email, password, nome) {
  if (!supa) return { error: 'Sem conexão com Supabase' };
  const { data, error } = await supa.auth.signUp({ email, password, options: { data: { nome } } });
  if (error) return { error: error.message };
  AUTH_USER = data.user; return { user: data.user };
}

async function signOut() { if (supa) await supa.auth.signOut(); AUTH_USER = null; }

async function getSession() {
  if (!supa) return null;
  const { data: { session } } = await supa.auth.getSession();
  if (session) { AUTH_USER = session.user; return session; }
  return null;
}

async function dbSelect(tb, filters={}, opts={}) {
  if (!supa) return null;
  try {
    let q = supa.from(tb).select(opts.select || '*');
    for (const [k,v] of Object.entries(filters)) q = q.eq(k,v);
    if (opts.order) q = q.order(opts.order, { ascending: opts.asc ?? false });
    if (opts.limit) q = q.limit(opts.limit);
    const { data, error } = await q;
    if (error) throw error;
    return data;
  } catch(e) { console.error(e); return null; }
}

async function dbInsert(tb, row) {
  if (!supa) return null;
  const needsOwner = ['transacoes','estoque','funcionarios','clientes','fornecedores','cardapio','fiscal','metas','agenda'];
  if (AUTH_USER && needsOwner.includes(tb)) row = { ...row, owner_id: AUTH_USER.id };
  try {
    const { data, error } = await supa.from(tb).insert(row).select().single();
    if (error) throw error;
    return data;
  } catch(e) { toast(t('erro') + ': ' + (e.message||''), 'error'); return null; }
}

async function dbUpdate(tb, id, changes) {
  if (!supa) return null;
  try {
    const { data, error } = await supa.from(tb).update(changes).eq('id', id).select().single();
    if (error) throw error;
    return data;
  } catch(e) { toast(t('erro') + ': ' + (e.message||''), 'error'); return null; }
}

async function dbDelete(tb, id) {
  if (!supa) return false;
  try {
    const { error } = await supa.from(tb).delete().eq('id', id);
    if (error) throw error;
    return true;
  } catch(e) { toast(t('erro') + ': ' + (e.message||''), 'error'); return false; }
}

// ── AUTH SCREENS ──
function showAuthScreen(tab='login') {
  document.getElementById('app').style.display='none';
  document.getElementById('bottomNav').style.display='none';
  document.getElementById('wizard-root').style.display='none';
  const root=document.getElementById('auth-root');
  root.style.display='flex';
  root.innerHTML=buildAuthHTML(tab);
}

function hideAuthScreen() {
  document.getElementById('auth-root').style.display='none';
  document.getElementById('app').style.display='flex';
}

function buildAuthHTML(tab) {
  const isLogin=tab==='login';
  return`<div style="min-height:100vh;width:100%;display:flex;align-items:center;justify-content:center;background:var(--bg);padding:1rem">
  <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-xl);width:100%;max-width:420px;padding:2rem;box-shadow:var(--shadow-md)">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:1.75rem">
      <div style="width:40px;height:40px;background:var(--accent);border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="ti ti-building-store" style="color:#fff;font-size:20px"></i></div>
      <div><div style="font-size:18px;font-weight:700;color:var(--text)">GestãoOS</div><div style="font-size:12px;color:var(--text-2)">${isLogin?'Entre na sua conta':'Crie sua conta grátis'}</div></div>
    </div>
    <div style="display:flex;background:var(--bg);border-radius:var(--radius);padding:3px;gap:2px;margin-bottom:1.5rem;border:1px solid var(--border)">
      <button onclick="showAuthScreen('login')" style="flex:1;padding:.4rem;border-radius:6px;font-size:13px;font-weight:500;border:none;cursor:pointer;font-family:inherit;transition:all .15s;background:${isLogin?'var(--surface)':'transparent'};color:${isLogin?'var(--text)':'var(--text-2)'}">Entrar</button>
      <button onclick="showAuthScreen('register')" style="flex:1;padding:.4rem;border-radius:6px;font-size:13px;font-weight:500;border:none;cursor:pointer;font-family:inherit;transition:all .15s;background:${!isLogin?'var(--surface)':'transparent'};color:${!isLogin?'var(--text)':'var(--text-2)'}">Criar conta</button>
    </div>
    <div id="authError" style="display:none;background:var(--red-bg);color:var(--red);padding:.75rem 1rem;border-radius:var(--radius);font-size:13px;margin-bottom:1rem;border:1px solid #fecaca"></div>
    ${!isLogin?`<div style="margin-bottom:12px"><label style="font-size:12px;font-weight:600;display:block;margin-bottom:5px;color:var(--text)">Seu nome *</label><input type="text" id="authNome" class="form-input" placeholder="Nome completo"/></div>`:''}
    <div style="margin-bottom:12px"><label style="font-size:12px;font-weight:600;display:block;margin-bottom:5px;color:var(--text)">E-mail *</label><input type="email" id="authEmail" class="form-input" placeholder="seu@email.com"/></div>
    <div style="margin-bottom:${isLogin?'1.5':'1'}rem"><label style="font-size:12px;font-weight:600;display:block;margin-bottom:5px;color:var(--text)">Senha *</label><input type="password" id="authPass" class="form-input" placeholder="mínimo 6 caracteres" onkeydown="if(event.key==='Enter')doAuth('${tab}')"/></div>
    ${!isLogin?`<div style="margin-bottom:1.5rem"><label style="font-size:12px;font-weight:600;display:block;margin-bottom:5px;color:var(--text)">Confirmar senha *</label><input type="password" id="authPass2" class="form-input" placeholder="repita a senha"/></div>`:''}
    <button class="btn btn-primary" id="authBtn" onclick="doAuth('${tab}')" style="width:100%;justify-content:center;padding:.65rem;font-size:14px">
      <i class="ti ${isLogin?'ti-login':'ti-user-plus'}"></i> ${isLogin?'Entrar':'Criar conta'}
    </button>
    <div style="text-align:center;margin-top:.875rem;font-size:12px;color:var(--text-3)">${isLogin?`Sem conta? <a href="#" onclick="showAuthScreen('register')" style="color:var(--accent);font-weight:500">Criar grátis</a>`:`Já tem conta? <a href="#" onclick="showAuthScreen('login')" style="color:var(--accent);font-weight:500">Entrar</a>`}</div>
    <div style="text-align:center;margin-top:.5rem"><button onclick="usarDemo()" style="background:none;border:none;font-size:11px;color:var(--text-3);cursor:pointer;font-family:inherit;padding:4px">Continuar sem conta (modo demo)</button></div>
  </div>
</div>`;
}

async function doAuth(tab) {
  const email=document.getElementById('authEmail')?.value.trim();
  const pass=document.getElementById('authPass')?.value;
  const err=document.getElementById('authError');
  const btn=document.getElementById('authBtn');
  err.style.display='none';
  if(!email||!pass){err.textContent='Preencha e-mail e senha';err.style.display='block';return;}
  btn.disabled=true;btn.innerHTML='<i class="ti ti-loader spin"></i> Aguarde...';
  if(tab==='register'){
    const nome=document.getElementById('authNome')?.value.trim();
    const pass2=document.getElementById('authPass2')?.value;
    if(!nome){err.textContent='Informe seu nome';err.style.display='block';btn.disabled=false;btn.innerHTML='<i class="ti ti-user-plus"></i> Criar conta';return;}
    if(pass!==pass2){err.textContent='As senhas não coincidem';err.style.display='block';btn.disabled=false;btn.innerHTML='<i class="ti ti-user-plus"></i> Criar conta';return;}
    if(pass.length<6){err.textContent='Senha deve ter ao menos 6 caracteres';err.style.display='block';btn.disabled=false;btn.innerHTML='<i class="ti ti-user-plus"></i> Criar conta';return;}
    const res=await signUp(email,pass,nome);
    if(res.error){err.textContent=res.error;err.style.display='block';btn.disabled=false;btn.innerHTML='<i class="ti ti-user-plus"></i> Criar conta';return;}
    CFG.email=email;CFG.responsavel=nome;CFG.firstRun=true;saveCFG();
    await afterLogin();
  }else{
    const res=await signIn(email,pass);
    if(res.error){err.textContent=res.error;err.style.display='block';btn.disabled=false;btn.innerHTML='<i class="ti ti-login"></i> Entrar';return;}
    CFG.email=email;saveCFG();
    await afterLogin();
  }
}

async function afterLogin() {
  hideAuthScreen();
  applyTheme(CFG.theme||'light');
  if(CFG.accentColor){
    document.documentElement.style.setProperty('--accent',CFG.accentColor);
    document.documentElement.style.setProperty('--accent-dark',CFG.accentColor);
  }
  buildDemoData();
  applyConfig();
  renderSidebar();
  renderEstSelect();
  document.getElementById('bottomNav').style.display='flex';
  document.getElementById('app').style.display='flex';

  if(CFG.firstRun!==false){
    showWizard();
    // load data silently in background
    if(supa) recarregarTudo().then(()=>renderEstSelect()).catch(()=>{});
  } else {
    nav('dashboard');
    if(supa) recarregarTudo().then(()=>{ renderEstSelect(); nav(PAGE); }).catch(()=>{});
  }
}

function usarDemo() {
  AUTH_USER=null;
  buildDemoData();
  hideAuthScreen();
  document.getElementById('bottomNav').style.display='flex';
  if(CFG.firstRun!==false){showWizard();}else{nav('dashboard');}
}

// ══════════════════════════════════════════
// CONFIG & STATE
// ══════════════════════════════════════════
let CFG = {
  nome:'GestãoOS', tipo:'restaurante', responsavel:'Admin', email:'',
  moeda:'BRL', lang:'pt-BR', theme:'light', accentColor:'#2563EB',
  modulos:['dashboard','financeiro','dre','fluxo','estoque','funcionarios','clientes','fornecedores','cardapio','fiscal','metas','relatorios','config'],
  url:'https://xdghoymizehyhtefidjs.supabase.co',
  key:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkZ2hveW1pemVoeWh0ZWZpZGpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MzA2NjksImV4cCI6MjA5NDEwNjY2OX0.DlOAA6VHdEga15qQs523wGjHSGAzxAE5WBNQjwLt4LQ',
  ok:false
};

function saveCFG() { localStorage.setItem('g4_cfg', JSON.stringify(CFG)); }
function loadCFG() {
  try { const s = localStorage.getItem('g4_cfg'); if (s) Object.assign(CFG, JSON.parse(s)); } catch(e) {}
}

// ── DEMO DATA ──
let LOCAL = { estabelecimentos:[], transacoes:[], estoque:[], funcionarios:[], clientes:[], fornecedores:[], cardapio:[], fiscal:[], metas:[] };

function buildDemoData() {
  LOCAL.estabelecimentos = [{ id:'e1', nome:'Estabelecimento Principal', tipo:'restaurante' }];
  const catR = ['Vendas balcão','Delivery iFood','Delivery Rappi','Reservas','Eventos'];
  const catD = ['Insumos','Salários','Aluguel','Energia','Água/Gás','Marketing','Manutenção','Embalagens'];
  let id = 1;
  for (let d = 29; d >= 0; d--) {
    const dt = new Date(2026, 4, 10 - d);
    const ds = dt.toISOString().slice(0,10);
    const nR = Math.floor(Math.random()*3)+1;
    for (let i=0;i<nR;i++) {
      const c=catR[Math.floor(Math.random()*catR.length)];
      LOCAL.transacoes.push({id:'t'+(id++),est_id:'e1',tipo:'receita',desc:c,cat:c,valor:Math.round((Math.random()*2000+400)*100)/100,data:ds,obs:''});
    }
    if (d%3===0){const c=catD[Math.floor(Math.random()*catD.length)];LOCAL.transacoes.push({id:'t'+(id++),est_id:'e1',tipo:'despesa',desc:'Pagamento '+c,cat:c,valor:Math.round((Math.random()*1200+200)*100)/100,data:ds,obs:''});}
  }
  LOCAL.estoque=[
    {id:'s1',est_id:'e1',nome:'Farinha de trigo',cat:'Insumos',qtd:45,min:20,custo:4.5,unidade:'kg'},
    {id:'s2',est_id:'e1',nome:'Mussarela',cat:'Frios',qtd:8,min:12,custo:32,unidade:'kg'},
    {id:'s3',est_id:'e1',nome:'Refrigerante 2L',cat:'Bebidas',qtd:48,min:24,custo:4.8,unidade:'un'},
    {id:'s4',est_id:'e1',nome:'Tomate pelado',cat:'Insumos',qtd:6,min:10,custo:5.2,unidade:'un'},
    {id:'s5',est_id:'e1',nome:'Embalagem pizza G',cat:'Embalagens',qtd:200,min:100,custo:0.8,unidade:'un'},
    {id:'s6',est_id:'e1',nome:'Óleo de soja',cat:'Insumos',qtd:18,min:10,custo:7.9,unidade:'un'},
    {id:'s7',est_id:'e1',nome:'Presunto fatiado',cat:'Frios',qtd:5,min:8,custo:28,unidade:'kg'},
  ];
  LOCAL.funcionarios=[
    {id:'f1',est_id:'e1',nome:'Carlos Mendes',cargo:'Cozinheiro Chefe',salario:3800,status:'ativo',admissao:'2023-03-15',tel:'(11) 99101-2233'},
    {id:'f2',est_id:'e1',nome:'Ana Paula Souza',cargo:'Atendente',salario:1900,status:'ativo',admissao:'2024-01-10',tel:'(11) 98200-3344'},
    {id:'f3',est_id:'e1',nome:'Pedro Alves',cargo:'Entregador',salario:1700,status:'ativo',admissao:'2023-11-01',tel:'(11) 97300-4455'},
    {id:'f4',est_id:'e1',nome:'Maria Costa',cargo:'Caixa',salario:2200,status:'ferias',admissao:'2022-07-20',tel:'(11) 96400-5566'},
  ];
  LOCAL.clientes=[
    {id:'c1',est_id:'e1',nome:'Roberto Ferreira',tel:'(11) 99111-2222',email:'roberto@email.com',visitas:28,total_gasto:2340,ultima:'2026-05-08',aniver:'1985-04-12'},
    {id:'c2',est_id:'e1',nome:'Lucia Santos',tel:'(11) 98222-3333',email:'lucia@email.com',visitas:19,total_gasto:1560,ultima:'2026-05-06',aniver:'1992-09-22'},
    {id:'c3',est_id:'e1',nome:'Marcos Oliveira',tel:'(11) 97333-4444',email:'',visitas:11,total_gasto:890,ultima:'2026-05-04',aniver:''},
    {id:'c4',est_id:'e1',nome:'Fernanda Lima',tel:'(11) 96444-5555',email:'',visitas:5,total_gasto:380,ultima:'2026-04-28',aniver:''},
  ];
  LOCAL.fornecedores=[
    {id:'fr1',est_id:'e1',nome:'Distribuidora Alfa',cat:'Insumos',contato:'João Silva',tel:'(11) 3333-1111',email:'vendas@alfa.com',prazo_pagamento:30,status:'ativo'},
    {id:'fr2',est_id:'e1',nome:'Laticínios Bela',cat:'Frios',contato:'Maria Gomes',tel:'(11) 4444-2222',email:'pedidos@bela.com',prazo_pagamento:15,status:'ativo'},
    {id:'fr3',est_id:'e1',nome:'Bebidas Express',cat:'Bebidas',contato:'Carlos Ramos',tel:'(11) 5555-3333',email:'',prazo_pagamento:7,status:'ativo'},
  ];
  LOCAL.cardapio=[
    {id:'k1',est_id:'e1',nome:'Pizza Margherita G',cat:'Pizzas',preco:55.90,custo:18,ativo:true,desc:'Molho, mussarela, manjericão'},
    {id:'k2',est_id:'e1',nome:'Pizza Calabresa G',cat:'Pizzas',preco:59.90,custo:21,ativo:true,desc:'Molho, calabresa, cebola'},
    {id:'k3',est_id:'e1',nome:'Pizza 4 Queijos G',cat:'Pizzas',preco:64.90,custo:24,ativo:true,desc:'Mussarela, parmesão, provolone, catupiry'},
    {id:'k4',est_id:'e1',nome:'Refrigerante Lata',cat:'Bebidas',preco:7.00,custo:2.5,ativo:true,desc:'350ml'},
    {id:'k5',est_id:'e1',nome:'Suco Natural 500ml',cat:'Bebidas',preco:14.00,custo:4,ativo:true,desc:'Laranja, limão, maracujá'},
    {id:'k6',est_id:'e1',nome:'Brownie c/ Sorvete',cat:'Sobremesas',preco:18.00,custo:6,ativo:false,desc:'Brownie quente com sorvete'},
  ];
  LOCAL.fiscal=[
    {id:'fi1',est_id:'e1',desc:'ISSQN Março/2026',tipo:'imposto',venc:'2026-04-15',valor:920,status:'pago',pago_em:'2026-04-14'},
    {id:'fi2',est_id:'e1',desc:'ISSQN Abril/2026',tipo:'imposto',venc:'2026-05-15',valor:950,status:'pago',pago_em:'2026-05-13'},
    {id:'fi3',est_id:'e1',desc:'ISSQN Maio/2026',tipo:'imposto',venc:'2026-06-15',valor:980,status:'aberto',pago_em:''},
    {id:'fi4',est_id:'e1',desc:'Simples Nacional Mai/26',tipo:'simples',venc:'2026-05-20',valor:3200,status:'aberto',pago_em:''},
    {id:'fi5',est_id:'e1',desc:'Aluguel Maio/2026',tipo:'aluguel',venc:'2026-05-10',valor:4500,status:'aberto',pago_em:''},
  ];
  LOCAL.metas=[
    {id:'mt1',est_id:'e1',nome:'Faturamento mensal',atual:28450,meta:35000,unidade:'R$',prazo:'2026-05-31',cat:'financeiro'},
    {id:'mt2',est_id:'e1',nome:'Margem de lucro',atual:31.2,meta:38,unidade:'%',prazo:'2026-05-31',cat:'financeiro'},
    {id:'mt3',est_id:'e1',nome:'Novos clientes',atual:12,meta:20,unidade:'clientes',prazo:'2026-05-31',cat:'vendas'},
  ];
}

// ── STATE ──
let EST = 'e1';
let PAGE = 'dashboard';
let SEARCH = '';
let FIN_TIPO = 'todas';
let FIN_CAT = '';
let FIN_PERIODO = '30';
let chartInstances = {};
let sidebarOpen = false;

// ══════════════════════════════════════════
// UTILS
// ══════════════════════════════════════════
const MOEDA = { BRL:'R$', USD:'$', EUR:'€' };
function fmt(v,d=2){const s=MOEDA[CFG.moeda]||'R$';return s+' '+Number(v||0).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d});}
function fmtNum(v,d=0){return Number(v||0).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d});}
function fmtDate(d){return d?d.slice(0,10).split('-').reverse().join('/'):'—';}
function fmtShort(d){if(!d)return'—';const p=d.slice(0,10).split('-');return p[2]+'/'+p[1];}
function today(){return new Date().toISOString().slice(0,10);}
function daysUntil(d){if(!d)return null;return Math.ceil((new Date(d)-new Date())/86400000);}
function initials(n){return(n||'?').split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();}
function uid(){return'L'+Date.now().toString(36)+Math.random().toString(36).slice(2,5);}
function isLocal(id){return!id||String(id).startsWith('L')||String(id).length<=3;}
function safeStr(s){return String(s||'').toLowerCase();}
function avatarColor(n){const c=['#2563EB','#16a34a','#dc2626','#d97706','#7c3aed','#0891b2','#db2777'];let h=0;for(const ch of(n||''))h=(h<<5)-h+ch.charCodeAt(0);return c[Math.abs(h)%c.length];}

function toast(msg,type='success',dur=3000){
  const c=document.getElementById('toast-container');
  const el=document.createElement('div');
  const icons={success:'ti-check',error:'ti-x',warning:'ti-alert-triangle',info:'ti-info-circle'};
  el.className='toast toast-'+type;
  el.innerHTML=`<i class="ti ${icons[type]||'ti-check'}" style="font-size:16px;flex-shrink:0"></i><span>${msg}</span>`;
  c.appendChild(el);
  setTimeout(()=>{el.style.animation='slideOut .2s ease forwards';setTimeout(()=>el.remove(),200);},dur);
}

function openModal(html,opts={}){
  closeModal();
  const root=document.getElementById('modal-root');
  const ov=document.createElement('div');
  ov.className='modal-overlay';ov.id='activeModal';
  ov.innerHTML=`<div class="modal${opts.lg?' modal-lg':''}">${html}</div>`;
  ov.addEventListener('click',e=>{if(e.target===ov)closeModal();});
  root.appendChild(ov);
  const fi=ov.querySelector('input,select,textarea');
  if(fi)setTimeout(()=>fi.focus(),50);
}
function closeModal(){const m=document.getElementById('activeModal');if(m)m.remove();}

function confirm2(msg,cb){
  openModal(`
    <div class="modal-header"><div class="modal-title">${t('confirmar')}</div></div>
    <div class="modal-body"><p style="font-size:14px;line-height:1.6;color:var(--text-2)">${msg}<br><span style="font-size:12px;color:var(--text-3)">${t('acao_irreversivel')}</span></p></div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal()">${t('cancelar')}</button>
      <button class="btn btn-danger" onclick="closeModal();(${cb.toString()})()">${t('excluir')}</button>
    </div>`);
}

function txEst(){return(LOCAL.transacoes||[]).filter(x=>x.est_id===EST);}
function totalR(){return txEst().filter(x=>x.tipo==='receita').reduce((s,x)=>s+Number(x.valor),0);}
function totalD(){return txEst().filter(x=>x.tipo==='despesa').reduce((s,x)=>s+Number(x.valor),0);}

// ══════════════════════════════════════════
// SIDEBAR & NAV
// ══════════════════════════════════════════
const MOD_DEF = {
  dashboard:    {icon:'ti-layout-dashboard', key:'dashboard',     group:'principal'},
  financeiro:   {icon:'ti-coin',             key:'financeiro',    group:'principal'},
  dre:          {icon:'ti-report-analytics', key:'dre',           group:'principal'},
  fluxo:        {icon:'ti-arrows-exchange',  key:'fluxo',         group:'principal'},
  estoque:      {icon:'ti-packages',         key:'estoque',       group:'operacional'},
  funcionarios: {icon:'ti-users',            key:'funcionarios',  group:'operacional'},
  clientes:     {icon:'ti-address-book',     key:'clientes',      group:'operacional'},
  fornecedores: {icon:'ti-truck',            key:'fornecedores',  group:'operacional'},
  cardapio:     {icon:'ti-clipboard-list',   key:'cardapio',      group:'operacional'},
  fiscal:       {icon:'ti-receipt-2',        key:'fiscal',        group:'financeiro_g'},
  metas:        {icon:'ti-target',           key:'metas',         group:'financeiro_g'},
  relatorios:   {icon:'ti-chart-bar',        key:'relatorios',    group:'analise'},
  config:       {icon:'ti-settings',         key:'config',        group:'sistema'},
};

function badgeCount(id){
  if(id==='estoque') return(LOCAL.estoque||[]).filter(e=>e.est_id===EST&&Number(e.qtd)<=Number(e.min)).length||'';
  if(id==='fiscal') return(LOCAL.fiscal||[]).filter(f=>f.est_id===EST&&f.status==='aberto').length||'';
  return'';
}

function renderSidebar(){
  const groups={};
  CFG.modulos.forEach(id=>{
    const m=MOD_DEF[id];if(!m)return;
    if(!groups[m.group])groups[m.group]=[];
    groups[m.group].push({id,...m});
  });
  let html='';
  for(const[g,items]of Object.entries(groups)){
    html+=`<div class="sb-group">${t(g)}</div>`;
    items.forEach(m=>{
      const badge=badgeCount(m.id);
      html+=`<button class="sb-link${PAGE===m.id?' active':''}" onclick="nav('${m.id}');closeSidebar()">
        <i class="ti ${m.icon}"></i><span>${t(m.key)}</span>
        ${badge?`<span class="sb-count">${badge}</span>`:''}
      </button>`;
    });
  }
  document.getElementById('sbNav').innerHTML=html;
}

function renderEstSelect(){
  const sel=document.getElementById('estSelect');
  if(!sel)return;
  sel.innerHTML=LOCAL.estabelecimentos.map(e=>`<option value="${e.id}" ${e.id===EST?'selected':''}>${e.nome}</option>`).join('');
}

function trocarEst(val){EST=val;nav(PAGE);}
function toggleSidebar(){sidebarOpen=!sidebarOpen;document.getElementById('sidebar').classList.toggle('open',sidebarOpen);document.getElementById('sb-overlay').classList.toggle('active',sidebarOpen);}
function closeSidebar(){sidebarOpen=false;document.getElementById('sidebar').classList.remove('open');document.getElementById('sb-overlay').classList.remove('active');}

function nav(id){
  PAGE=id;SEARCH='';
  const si=document.getElementById('searchInput');if(si)si.value='';
  Object.values(chartInstances).forEach(c=>{try{c.destroy();}catch(e){}});
  chartInstances={};
  closeSidebar();
  renderSidebar();
  // sync bottom nav
  ['dashboard','financeiro','estoque','clientes','config'].forEach(i=>{
    const el=document.getElementById('bn-'+i);
    if(el)el.classList.toggle('active',i===id);
  });

  const PAGE_DEFS={
    dashboard:{title:t('dashboard'),sub:t('visao_geral'),primary:null},
    financeiro:{title:t('financeiro'),sub:'',primary:{icon:'ti-plus',label:t('novo_lancamento'),fn:'modalTransacao()'}},
    dre:{title:t('dre'),sub:'',primary:null},
    fluxo:{title:t('fluxo'),sub:'',primary:null},
    estoque:{title:t('estoque'),sub:'',primary:{icon:'ti-plus',label:t('novo_item'),fn:'modalEstoque()'}},
    funcionarios:{title:t('funcionarios'),sub:'',primary:{icon:'ti-plus',label:t('novo_funcionario'),fn:'modalFuncionario()'}},
    clientes:{title:t('clientes'),sub:'',primary:{icon:'ti-plus',label:t('novo_cliente'),fn:'modalCliente()'}},
    fornecedores:{title:t('fornecedores'),sub:'',primary:{icon:'ti-plus',label:t('novo_fornecedor'),fn:'modalFornecedor()'}},
    cardapio:{title:t('cardapio'),sub:'',primary:{icon:'ti-plus',label:t('novo_item'),fn:'modalCardapio()'}},
    fiscal:{title:t('fiscal'),sub:'',primary:{icon:'ti-plus',label:t('novo_fiscal'),fn:'modalFiscal()'}},
    metas:{title:t('metas'),sub:'',primary:{icon:'ti-plus',label:t('nova_meta'),fn:'modalMeta()'}},
    relatorios:{title:t('relatorios'),sub:'',primary:null},
    config:{title:t('config'),sub:'',primary:null},
  };
  const def=PAGE_DEFS[id]||{title:id,sub:'',primary:null};
  document.getElementById('tbTitle').textContent=def.title;
  document.getElementById('tbSub').textContent=def.sub;
  const pb=document.getElementById('tbPrimaryBtn');
  if(def.primary){
    pb.style.display='inline-flex';
    pb.querySelector('#tbBtnIcon').className='ti '+def.primary.icon;
    pb.querySelector('#tbBtnLabel').textContent=def.primary.label;
    pb.setAttribute('onclick',def.primary.fn);
  } else pb.style.display='none';

  const pages={dashboard:pgDashboard,financeiro:pgFinanceiro,dre:pgDRE,fluxo:pgFluxo,
    estoque:pgEstoque,funcionarios:pgFuncionarios,clientes:pgClientes,
    fornecedores:pgFornecedores,cardapio:pgCardapio,fiscal:pgFiscal,
    metas:pgMetas,relatorios:pgRelatorios,config:pgConfig};
  const fn=pages[id];
  document.getElementById('mainContent').innerHTML=fn?fn():`<div class="empty"><i class="ti ti-construction"></i></div>`;
  if(id==='dashboard')renderDashCharts();
  if(id==='fluxo')renderFluxoChart();
  if(id==='relatorios')renderRelCharts();
  window.scrollTo(0,0);
}

function handleSearch(v){SEARCH=v.toLowerCase();nav(PAGE);}

// ══════════════════════════════════════════
// DASHBOARD
// ══════════════════════════════════════════
function pgDashboard(){
  const rec=totalR(),desp=totalD(),lucro=rec-desp,margem=rec>0?(lucro/rec*100):0;
  const folha=(LOCAL.funcionarios||[]).filter(f=>f.est_id===EST&&f.status==='ativo').reduce((s,f)=>s+Number(f.salario),0);
  const txR=txEst().slice().sort((a,b)=>b.data.localeCompare(a.data)).slice(0,6);
  const alertaEstq=(LOCAL.estoque||[]).filter(e=>e.est_id===EST&&Number(e.qtd)<=Number(e.min));
  const fiscalAb=(LOCAL.fiscal||[]).filter(f=>f.est_id===EST&&f.status==='aberto');

  return `
  <div class="metrics-grid mb-3">
    ${metricCard(t('receitas'),fmt(rec),'ti-trending-up','#2563EB','#eff6ff','↑ 8,4% vs. mês anterior','delta-up')}
    ${metricCard(t('despesas'),fmt(desp),'ti-trending-down','#dc2626','#fef2f2','↑ 2,1% vs. mês anterior','delta-down')}
    ${metricCard(t('lucro'),fmt(lucro),'ti-cash',lucro>=0?'#16a34a':'#dc2626','#f0fdf4',t('margem')+': '+fmtNum(margem,1)+'%','delta-neutral')}
    ${metricCard(t('folha'),fmt(folha),'ti-users','#7c3aed','#f5f3ff',(LOCAL.funcionarios||[]).filter(f=>f.est_id===EST&&f.status==='ativo').length+' '+t('ativos'),'delta-neutral')}
  </div>

  <div class="grid-2 mb-3">
    <div class="card">
      <div class="card-header"><div><div class="card-title">${t('receitas')} vs. ${t('despesas')}</div></div></div>
      <div class="chart-wrap"><canvas id="chartDash"></canvas></div>
    </div>
    <div class="card">
      <div class="card-header"><div class="card-title">Lançamentos recentes</div><button class="btn btn-ghost btn-sm" onclick="nav('financeiro')">Ver todos <i class="ti ti-arrow-right"></i></button></div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>${t('descricao')}</th><th>${t('data')}</th><th style="text-align:right">${t('valor')}</th></tr></thead>
          <tbody>${txR.map(tx=>`<tr>
            <td><div class="flex-cell"><div class="tx-icon ${tx.tipo==='receita'?'tx-in':'tx-out'}"><i class="ti ${tx.tipo==='receita'?'ti-arrow-down-left':'ti-arrow-up-right'}"></i></div><div><div class="fw5">${tx.desc}</div><div class="text-xs text-3">${tx.cat}</div></div></div></td>
            <td class="text-2 nowrap">${fmtDate(tx.data)}</td>
            <td class="text-right fw6" style="color:${tx.tipo==='receita'?'#16a34a':'#dc2626'};font-family:monospace">${tx.tipo==='receita'?'+':'-'}${fmt(tx.valor)}</td>
          </tr>`).join('')}</tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="grid-3">
    <div class="card">
      <div class="card-header"><div class="card-title">${t('estoque')} — alertas</div><button class="btn btn-ghost btn-sm" onclick="nav('estoque')">Ver <i class="ti ti-arrow-right"></i></button></div>
      ${alertaEstq.length?alertaEstq.slice(0,5).map(e=>`<div class="stat-row">
        <div><div class="fw5 text-sm">${e.nome}</div><div class="text-xs text-3">${e.qtd} ${e.unidade} / mín ${e.min}</div></div>
        <span class="badge badge-red">Repor</span>
      </div>`).join(''):`<div class="empty-sm"><i class="ti ti-circle-check" style="color:#16a34a"></i> Estoque OK</div>`}
    </div>
    <div class="card">
      <div class="card-header"><div class="card-title">${t('fiscal')} — pendentes</div><button class="btn btn-ghost btn-sm" onclick="nav('fiscal')">Ver <i class="ti ti-arrow-right"></i></button></div>
      ${fiscalAb.slice(0,4).map(f=>{
        const dias=daysUntil(f.venc);const urg=dias!==null&&dias<=5;
        return`<div class="stat-row">
          <div><div class="fw5 text-sm">${f.desc}</div><div class="text-xs text-3">Venc. ${fmtDate(f.venc)}</div></div>
          <div class="text-right"><div class="fw6 text-sm">${fmt(f.valor)}</div><span class="badge ${urg?'badge-red':'badge-amber'}">${urg?t('urgente'):t('pendente')}</span></div>
        </div>`;
      }).join('')||`<div class="empty-sm"><i class="ti ti-circle-check" style="color:#16a34a"></i> Tudo em dia</div>`}
    </div>
    <div class="card">
      <div class="card-header"><div class="card-title">${t('metas')}</div><button class="btn btn-ghost btn-sm" onclick="nav('metas')">Ver <i class="ti ti-arrow-right"></i></button></div>
      ${(LOCAL.metas||[]).filter(m=>m.est_id===EST).slice(0,3).map(m=>{
        const pct=Math.min(100,Math.round(Number(m.atual)/Number(m.meta)*100));
        const cor=pct>=100?'#16a34a':pct>=70?'#2563EB':'#d97706';
        return`<div style="margin-bottom:12px">
          <div class="flex-between mb-1"><span class="text-sm fw5">${m.nome}</span><span class="text-sm fw6" style="color:${cor}">${pct}%</span></div>
          <div class="progress"><div class="progress-fill" style="width:${pct}%;background:${cor}"></div></div>
        </div>`;
      }).join('')}
    </div>
  </div>`;
}

function metricCard(label,val,icon,color,bg,delta,deltaClass){
  return`<div class="metric-card">
    <div class="metric-header"><div class="metric-label">${label}</div><div class="metric-icon" style="background:${bg}"><i class="ti ${icon}" style="color:${color}"></i></div></div>
    <div class="metric-value" style="color:${color}">${val}</div>
    <div class="metric-delta"><span class="${deltaClass}">${delta}</span></div>
  </div>`;
}

function renderDashCharts(){
  const txs=txEst();
  const days=[];for(let i=6;i>=0;i--){const d=new Date(2026,4,10-i);days.push(d.toISOString().slice(0,10));}
  const rec=days.map(d=>txs.filter(x=>x.data===d&&x.tipo==='receita').reduce((s,x)=>s+Number(x.valor),0));
  const des=days.map(d=>txs.filter(x=>x.data===d&&x.tipo==='despesa').reduce((s,x)=>s+Number(x.valor),0));
  const ctx=document.getElementById('chartDash');if(!ctx)return;
  chartInstances.dash=new Chart(ctx,{type:'bar',data:{labels:days.map(fmtShort),datasets:[
    {label:t('receitas'),data:rec,backgroundColor:'#2563EB22',borderColor:'#2563EB',borderWidth:2,borderRadius:5,borderSkipped:false},
    {label:t('despesas'),data:des,backgroundColor:'#dc262622',borderColor:'#dc2626',borderWidth:2,borderRadius:5,borderSkipped:false},
  ]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{labels:{font:{size:11,family:'Inter'},boxWidth:12}}},scales:{x:{grid:{display:false}},y:{grid:{color:'rgba(150,150,150,.08)'},ticks:{callback:v=>'R$'+fmtNum(v/1000,0)+'k'}}}},});
}

// ══════════════════════════════════════════
// FINANCEIRO
// ══════════════════════════════════════════
function pgFinanceiro(){
  let txs=txEst().slice().sort((a,b)=>b.data.localeCompare(a.data));
  if(FIN_TIPO!=='todas')txs=txs.filter(x=>x.tipo===FIN_TIPO);
  if(FIN_CAT)txs=txs.filter(x=>x.cat===FIN_CAT);
  if(SEARCH)txs=txs.filter(x=>safeStr(x.desc).includes(SEARCH)||safeStr(x.cat).includes(SEARCH));
  const dias=parseInt(FIN_PERIODO);
  if(dias>0){const c=new Date();c.setDate(c.getDate()-dias);const cs=c.toISOString().slice(0,10);txs=txs.filter(x=>x.data>=cs);}
  const tR=txs.filter(x=>x.tipo==='receita').reduce((s,x)=>s+Number(x.valor),0);
  const tD=txs.filter(x=>x.tipo==='despesa').reduce((s,x)=>s+Number(x.valor),0);
  const allCats=[...new Set(txEst().map(x=>x.cat))].sort();

  return`
  <div class="totals-bar mb-2">
    <div class="total-item"><div class="t-label">${t('receitas')}</div><div class="t-value" style="color:#16a34a">${fmt(tR)}</div></div>
    <div class="total-item"><div class="t-label">${t('despesas')}</div><div class="t-value" style="color:#dc2626">${fmt(tD)}</div></div>
    <div class="total-item"><div class="t-label">${t('saldo')}</div><div class="t-value" style="color:${tR-tD>=0?'#16a34a':'#dc2626'}">${fmt(tR-tD)}</div></div>
    <div class="total-item"><div class="t-label">Lançamentos</div><div class="t-value">${txs.length}</div></div>
  </div>
  <div class="card">
    <div class="filter-bar">
      <div class="pill-toggle">
        <button class="pill-btn${FIN_TIPO==='todas'?' active':''}" onclick="FIN_TIPO='todas';nav('financeiro')">${t('todas')}</button>
        <button class="pill-btn${FIN_TIPO==='receita'?' active':''}" onclick="FIN_TIPO='receita';nav('financeiro')">${t('receitas')}</button>
        <button class="pill-btn${FIN_TIPO==='despesa'?' active':''}" onclick="FIN_TIPO='despesa';nav('financeiro')">${t('despesas')}</button>
      </div>
      <select class="form-select" style="width:auto" onchange="FIN_CAT=this.value;nav('financeiro')">
        <option value="">${t('todas')} categorias</option>
        ${allCats.map(c=>`<option value="${c}" ${FIN_CAT===c?'selected':''}>${c}</option>`).join('')}
      </select>
      <select class="form-select" style="width:auto" onchange="FIN_PERIODO=this.value;nav('financeiro')">
        <option value="7" ${FIN_PERIODO==='7'?'selected':''}>7 dias</option>
        <option value="30" ${FIN_PERIODO==='30'?'selected':''}>30 dias</option>
        <option value="90" ${FIN_PERIODO==='90'?'selected':''}>90 dias</option>
        <option value="0" ${FIN_PERIODO==='0'?'selected':''}>Tudo</option>
      </select>
    </div>
    <div class="table-wrap">
      <table>
        <thead><tr><th>${t('data')}</th><th>${t('descricao')}</th><th class="hide-sm">${t('categoria')}</th><th class="hide-sm">${t('tipo')}</th><th style="text-align:right">${t('valor')}</th><th style="text-align:right"></th></tr></thead>
        <tbody>
        ${txs.length?txs.map(tx=>`<tr>
          <td class="nowrap text-2 text-sm">${fmtDate(tx.data)}</td>
          <td><div class="fw5">${tx.desc}</div>${tx.obs?`<div class="text-xs text-3">${tx.obs}</div>`:''}</td>
          <td class="hide-sm"><span class="badge badge-gray">${tx.cat}</span></td>
          <td class="hide-sm"><span class="badge ${tx.tipo==='receita'?'badge-green':'badge-red'}">${tx.tipo==='receita'?t('receita'):t('despesa')}</span></td>
          <td class="text-right fw6 nowrap" style="color:${tx.tipo==='receita'?'#16a34a':'#dc2626'};font-family:monospace;font-size:13px">${tx.tipo==='receita'?'+':'-'}${fmt(tx.valor)}</td>
          <td><div class="td-actions">
            <button class="btn btn-ghost btn-sm" onclick="modalTransacao('${tx.id}')"><i class="ti ti-edit"></i></button>
            <button class="btn btn-ghost btn-sm" style="color:var(--red)" onclick="deletarTx('${tx.id}')"><i class="ti ti-trash"></i></button>
          </div></td>
        </tr>`).join(''):`<tr><td colspan="6"><div class="empty"><i class="ti ti-inbox"></i><div class="empty-title">${t('nenhum_lancamento')}</div></div></td></tr>`}
        </tbody>
      </table>
    </div>
  </div>`;
}

function modalTransacao(editId){
  const tx=editId?LOCAL.transacoes.find(x=>x.id===editId):null;
  openModal(`
    <div class="modal-header"><div class="modal-title">${tx?t('editar')+' lançamento':'Novo lançamento'}</div><button class="btn btn-ghost btn-sm" onclick="closeModal()"><i class="ti ti-x"></i></button></div>
    <div class="modal-body">
      <div class="form-row cols-2">
        <div class="form-group"><label class="form-label">${t('tipo')} *</label><select class="form-select" id="tx_tipo"><option value="receita" ${tx?.tipo==='receita'?'selected':''}>${t('receita')}</option><option value="despesa" ${tx?.tipo==='despesa'||!tx?'selected':''}>${t('despesa')}</option></select></div>
        <div class="form-group"><label class="form-label">${t('data')} *</label><input type="date" class="form-input" id="tx_data" value="${tx?.data||today()}"/></div>
      </div>
      <div class="form-group mb-2"><label class="form-label">${t('descricao')} *</label><input type="text" class="form-input" id="tx_desc" value="${tx?.desc||''}" placeholder="Ex: Vendas do almoço"/></div>
      <div class="form-row cols-2">
        <div class="form-group"><label class="form-label">${t('valor')} *</label><div class="currency-wrap"><div class="currency-prefix">${MOEDA[CFG.moeda]}</div><input type="number" id="tx_valor" value="${tx?.valor||''}" placeholder="0,00" min="0" step="0.01"/></div></div>
        <div class="form-group"><label class="form-label">${t('categoria')} *</label>
          <select class="form-select" id="tx_cat">
            <optgroup label="${t('receitas')}">${['Vendas balcão','Delivery iFood','Delivery Rappi','Delivery próprio','Reservas','Eventos','Outras receitas'].map(c=>`<option value="${c}" ${tx?.cat===c?'selected':''}>${c}</option>`).join('')}</optgroup>
            <optgroup label="${t('despesas')}">${['Insumos','Salários','Encargos','Aluguel','Energia','Água/Gás','Internet','Marketing','Manutenção','Embalagens','Equipamentos','Contabilidade','Outras despesas'].map(c=>`<option value="${c}" ${tx?.cat===c?'selected':''}>${c}</option>`).join('')}</optgroup>
          </select>
        </div>
      </div>
      <div class="form-group"><label class="form-label">Observação</label><input type="text" class="form-input" id="tx_obs" value="${tx?.obs||''}" placeholder="(opcional)"/></div>
    </div>
    <div class="modal-footer"><button class="btn btn-secondary" onclick="closeModal()">${t('cancelar')}</button><button class="btn btn-primary" onclick="salvarTx('${editId||''}')"><i class="ti ti-check"></i> ${t('salvar')}</button></div>`);
}

async function salvarTx(editId){
  const tipo=document.getElementById('tx_tipo').value;
  const data=document.getElementById('tx_data').value;
  const desc=document.getElementById('tx_desc').value.trim();
  const valor=parseFloat(document.getElementById('tx_valor').value);
  const cat=document.getElementById('tx_cat').value;
  const obs=document.getElementById('tx_obs').value.trim();
  if(!desc){toast('Informe a descrição','error');return;}
  if(!valor||valor<=0){toast('Informe um valor válido','error');return;}
  if(!data){toast('Informe a data','error');return;}
  const row={est_id:EST,tipo,data,desc,cat,valor,obs};
  if(editId){
    if(supa&&!isLocal(editId)){const s=await dbUpdate('transacoes',editId,row);if(!s)return;Object.assign(LOCAL.transacoes.find(x=>x.id===editId),s);}
    else Object.assign(LOCAL.transacoes.find(x=>x.id===editId),row);
    toast(t('salvo'));
  }else{
    if(supa){const s=await dbInsert('transacoes',row);if(!s)return;LOCAL.transacoes.unshift(s);}
    else LOCAL.transacoes.unshift({id:uid(),...row});
    toast(t('salvo'));
  }
  closeModal();nav('financeiro');
}

async function deletarTx(id){
  confirm2('Excluir este lançamento?',async()=>{
    if(supa&&!isLocal(id)){const ok=await dbDelete('transacoes',id);if(!ok)return;}
    LOCAL.transacoes=LOCAL.transacoes.filter(x=>x.id!==id);
    toast(t('removido'));nav('financeiro');
  });
}

// ══════════════════════════════════════════
// DRE
// ══════════════════════════════════════════
function pgDRE(){
  const txs=txEst();
  const catR={},catD={};
  txs.forEach(x=>{const v=Number(x.valor);x.tipo==='receita'?catR[x.cat]=(catR[x.cat]||0)+v:catD[x.cat]=(catD[x.cat]||0)+v;});
  const tR=Object.values(catR).reduce((s,v)=>s+v,0);
  const tD=Object.values(catD).reduce((s,v)=>s+v,0);
  const lucro=tR-tD;
  const row=(label,val,bold,indent,color)=>`<tr style="${bold?'font-weight:700;background:var(--bg)':''}">
    <td style="padding:.6rem 1rem${indent?';padding-left:2rem':''}">${label}</td>
    <td style="text-align:right;padding:.6rem 1rem;font-weight:${bold?700:500};color:${color||'inherit'};font-family:monospace;font-size:13px">${fmt(val)}</td>
    <td style="text-align:right;padding:.6rem 1rem;color:var(--text-3);font-size:12px">${tR>0?fmtNum(Math.abs(val)/tR*100,1)+'%':'—'}</td>
  </tr>`;
  return`<div class="card"><div class="card-header"><div class="card-title">${t('dre')}</div></div>
    <div class="table-wrap"><table>
      <thead><tr><th>Conta</th><th style="text-align:right">${t('valor')}</th><th style="text-align:right">% Receita</th></tr></thead>
      <tbody>
        <tr style="background:var(--accent-light)"><td colspan="3" style="padding:.5rem 1rem;font-size:11px;font-weight:700;color:var(--accent-text);text-transform:uppercase;letter-spacing:.05em">${t('receitas')}</td></tr>
        ${Object.entries(catR).sort((a,b)=>b[1]-a[1]).map(([k,v])=>row(k,v,false,true,'#16a34a')).join('')}
        ${row('TOTAL '+t('receitas').toUpperCase(),tR,true,false,'#16a34a')}
        <tr style="background:var(--red-bg)"><td colspan="3" style="padding:.5rem 1rem;font-size:11px;font-weight:700;color:var(--red);text-transform:uppercase;letter-spacing:.05em">${t('despesas')}</td></tr>
        ${Object.entries(catD).sort((a,b)=>b[1]-a[1]).map(([k,v])=>row(k,v,false,true,'#dc2626')).join('')}
        ${row('TOTAL '+t('despesas').toUpperCase(),tD,true,false,'#dc2626')}
        <tr style="background:${lucro>=0?'var(--green-bg)':'var(--red-bg)'}">
          <td style="padding:.75rem 1rem;font-size:15px;font-weight:700">RESULTADO LÍQUIDO</td>
          <td style="text-align:right;padding:.75rem 1rem;font-size:15px;font-weight:700;color:${lucro>=0?'#16a34a':'#dc2626'};font-family:monospace">${fmt(lucro)}</td>
          <td style="text-align:right;padding:.75rem 1rem;color:${lucro>=0?'#16a34a':'#dc2626'};font-size:13px;font-weight:600">${tR>0?fmtNum(lucro/tR*100,1)+'%':'—'}</td>
        </tr>
      </tbody>
    </table></div>
  </div>`;
}

// ══════════════════════════════════════════
// FLUXO
// ══════════════════════════════════════════
function pgFluxo(){
  const fiscal=(LOCAL.fiscal||[]).filter(f=>f.est_id===EST&&f.status==='aberto');
  return`
  <div class="card mb-2">
    <div class="card-header"><div class="card-title">${t('fluxo')} — 14 dias</div></div>
    <div class="chart-wrap" style="height:250px"><canvas id="chartFluxo"></canvas></div>
  </div>
  <div class="grid-2">
    <div class="card">
      <div class="card-header"><div class="card-title">Entradas recentes</div></div>
      <div class="table-wrap"><table><thead><tr><th>${t('descricao')}</th><th>${t('data')}</th><th style="text-align:right">${t('valor')}</th></tr></thead>
      <tbody>${txEst().filter(x=>x.tipo==='receita').sort((a,b)=>b.data.localeCompare(a.data)).slice(0,6).map(x=>`<tr><td class="fw5">${x.desc}</td><td class="text-2 text-sm">${fmtDate(x.data)}</td><td class="text-right fw6" style="color:#16a34a;font-family:monospace;font-size:13px">${fmt(x.valor)}</td></tr>`).join('')}</tbody>
      </table></div>
    </div>
    <div class="card">
      <div class="card-header"><div class="card-title">Saídas pendentes</div></div>
      <div class="table-wrap"><table><thead><tr><th>${t('descricao')}</th><th>${t('vencimento')}</th><th style="text-align:right">${t('valor')}</th></tr></thead>
      <tbody>${fiscal.map(f=>`<tr><td class="fw5">${f.desc}</td><td class="text-2 text-sm">${fmtDate(f.venc)}</td><td class="text-right fw6" style="color:#dc2626;font-family:monospace;font-size:13px">${fmt(f.valor)}</td></tr>`).join('')||`<tr><td colspan="3"><div class="empty-sm">Sem saídas pendentes</div></td></tr>`}</tbody>
      </table></div>
    </div>
  </div>`;
}

function renderFluxoChart(){
  const ctx=document.getElementById('chartFluxo');if(!ctx)return;
  const days=[];for(let i=-7;i<=7;i++){const d=new Date(2026,4,10+i);days.push(d.toISOString().slice(0,10));}
  const txs=txEst();let acum=totalR()-totalD();
  const saldos=days.map(d=>{const r=txs.filter(x=>x.data===d&&x.tipo==='receita').reduce((s,x)=>s+Number(x.valor),0);const de=txs.filter(x=>x.data===d&&x.tipo==='despesa').reduce((s,x)=>s+Number(x.valor),0);acum+=r-de;return Math.round(acum);});
  chartInstances.fluxo=new Chart(ctx,{type:'line',data:{labels:days.map(fmtShort),datasets:[{label:'Saldo acumulado',data:saldos,borderColor:'#2563EB',backgroundColor:'#2563EB18',fill:true,tension:.4,pointRadius:4,pointBackgroundColor:'#2563EB'}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{labels:{font:{size:11,family:'Inter'},boxWidth:12}}},scales:{x:{grid:{display:false}},y:{grid:{color:'rgba(150,150,150,.08)'},ticks:{callback:v=>'R$'+fmtNum(v/1000,0)+'k'}}}}});
}

// ══════════════════════════════════════════
// ESTOQUE
// ══════════════════════════════════════════
function pgEstoque(){
  let itens=(LOCAL.estoque||[]).filter(e=>e.est_id===EST);
  if(SEARCH)itens=itens.filter(e=>safeStr(e.nome).includes(SEARCH)||safeStr(e.cat).includes(SEARCH));
  itens.sort((a,b)=>a.nome.localeCompare(b.nome));
  const abaixo=itens.filter(e=>Number(e.qtd)<=Number(e.min)).length;
  const totalVal=itens.reduce((s,e)=>s+Number(e.qtd)*Number(e.custo||0),0);
  return`
  <div class="metrics-grid mb-3">
    ${metricCard('Total itens',itens.length,'ti-packages','#2563EB','#eff6ff','','delta-neutral')}
    ${metricCard('Abaixo do mínimo',abaixo,'ti-alert-triangle','#dc2626','#fef2f2','','delta-neutral')}
    ${metricCard(t('valor_estoque'),fmt(totalVal),'ti-cash','#16a34a','#f0fdf4','','delta-neutral')}
    ${metricCard('Categorias',[...new Set(itens.map(e=>e.cat))].length,'ti-category','#7c3aed','#f5f3ff','','delta-neutral')}
  </div>
  <div class="card">
    <div class="table-wrap"><table>
      <thead><tr><th>${t('nome')}</th><th class="hide-sm">${t('categoria')}</th><th>${t('qtd_atual')}</th><th class="hide-sm">${t('qtd_minima')}</th><th class="hide-sm">${t('custo_unit')}</th><th>${t('status')}</th><th style="text-align:right"></th></tr></thead>
      <tbody>${itens.length?itens.map(e=>{
        const qtd=Number(e.qtd),min=Number(e.min);
        const pct=Math.min(100,Math.round(qtd/(min*3||1)*100));
        const st=qtd<=min?['badge-red','Repor']:qtd<=min*1.5?['badge-amber','Atenção']:['badge-green','OK'];
        const cor=qtd<=min?'#dc2626':qtd<=min*1.5?'#d97706':'#16a34a';
        return`<tr>
          <td><div class="fw5">${e.nome}</div><div class="stk-bar"><div class="stk-fill" style="width:${pct}%;background:${cor}"></div></div></td>
          <td class="hide-sm"><span class="badge badge-gray">${e.cat}</span></td>
          <td class="fw6">${fmtNum(qtd,1)} <span class="text-3 text-xs">${e.unidade}</span></td>
          <td class="hide-sm text-2">${fmtNum(min,1)} ${e.unidade}</td>
          <td class="hide-sm" style="font-family:monospace;font-size:13px">${fmt(e.custo)}</td>
          <td><span class="badge ${st[0]}">${st[1]}</span></td>
          <td><div class="td-actions">
            <button class="btn btn-ghost btn-sm" onclick="ajustarEstoque('${e.id}','${e.nome.replace(/'/g,"\\'")}',${qtd},'${e.unidade||''}')"><i class="ti ti-plus"></i></button>
            <button class="btn btn-ghost btn-sm" onclick="modalEstoque('${e.id}')"><i class="ti ti-edit"></i></button>
            <button class="btn btn-ghost btn-sm" style="color:var(--red)" onclick="deletarEstoque('${e.id}')"><i class="ti ti-trash"></i></button>
          </div></td>
        </tr>`;
      }).join(''):`<tr><td colspan="7"><div class="empty"><i class="ti ti-inbox"></i><div class="empty-title">${t('nenhum_item')}</div></div></td></tr>`}
      </tbody>
    </table></div>
  </div>`;
}

function modalEstoque(editId){
  const e=editId?LOCAL.estoque.find(x=>x.id===editId):null;
  openModal(`
    <div class="modal-header"><div class="modal-title">${e?t('editar')+' item':'Novo item no estoque'}</div><button class="btn btn-ghost btn-sm" onclick="closeModal()"><i class="ti ti-x"></i></button></div>
    <div class="modal-body">
      <div class="form-group mb-2"><label class="form-label">${t('nome')} *</label><input type="text" class="form-input" id="e_nome" value="${e?.nome||''}" placeholder="Ex: Farinha de trigo"/></div>
      <div class="form-row cols-2">
        <div class="form-group"><label class="form-label">${t('categoria')}</label><select class="form-select" id="e_cat">${['Insumos','Frios','Bebidas','Temperos','Embalagens','Limpeza','Equipamentos','Outros'].map(c=>`<option ${e?.cat===c?'selected':''}>${c}</option>`).join('')}</select></div>
        <div class="form-group"><label class="form-label">${t('unidade')}</label><select class="form-select" id="e_unid">${['kg','g','L','ml','un','cx','pct','sc'].map(u=>`<option ${e?.unidade===u?'selected':''}>${u}</option>`).join('')}</select></div>
      </div>
      <div class="form-row cols-3">
        <div class="form-group"><label class="form-label">${t('qtd_atual')} *</label><input type="number" class="form-input" id="e_qtd" value="${e?.qtd||0}" min="0" step="0.1"/></div>
        <div class="form-group"><label class="form-label">${t('qtd_minima')}</label><input type="number" class="form-input" id="e_min" value="${e?.min||0}" min="0" step="0.1"/></div>
        <div class="form-group"><label class="form-label">${t('custo_unit')}</label><input type="number" class="form-input" id="e_custo" value="${e?.custo||0}" min="0" step="0.01"/></div>
      </div>
    </div>
    <div class="modal-footer"><button class="btn btn-secondary" onclick="closeModal()">${t('cancelar')}</button><button class="btn btn-primary" onclick="salvarEstoque('${editId||''}')"><i class="ti ti-check"></i> ${t('salvar')}</button></div>`);
}

function ajustarEstoque(id,nome,qtdAtual,unid){
  openModal(`
    <div class="modal-header"><div class="modal-title">Ajustar — ${nome}</div><button class="btn btn-ghost btn-sm" onclick="closeModal()"><i class="ti ti-x"></i></button></div>
    <div class="modal-body">
      <div style="text-align:center;padding:.75rem 0">
        <div class="text-2 text-sm mb-1">Quantidade atual</div>
        <div style="font-size:32px;font-weight:700;font-family:monospace">${fmtNum(qtdAtual,1)} <span style="font-size:16px;font-weight:400">${unid}</span></div>
      </div>
      <div class="form-row cols-2">
        <div class="form-group"><label class="form-label">Operação</label><select class="form-select" id="aj_op"><option value="add">+ Adicionar (entrada)</option><option value="sub">- Subtrair (saída)</option><option value="set">= Definir valor</option></select></div>
        <div class="form-group"><label class="form-label">Quantidade</label><input type="number" class="form-input" id="aj_qtd" value="0" min="0" step="0.1"/></div>
      </div>
    </div>
    <div class="modal-footer"><button class="btn btn-secondary" onclick="closeModal()">${t('cancelar')}</button><button class="btn btn-primary" onclick="confirmarAjuste('${id}')"><i class="ti ti-check"></i> Ajustar</button></div>`);
}

async function confirmarAjuste(id){
  const e=LOCAL.estoque.find(x=>x.id===id);if(!e)return;
  const op=document.getElementById('aj_op').value;
  const qtd=parseFloat(document.getElementById('aj_qtd').value)||0;
  let nova=Number(e.qtd);
  if(op==='add')nova+=qtd;else if(op==='sub')nova=Math.max(0,nova-qtd);else nova=qtd;
  e.qtd=Math.round(nova*10)/10;
  if(supa&&!isLocal(id))await dbUpdate('estoque',id,{qtd:e.qtd,updated_at:new Date().toISOString()});
  toast('Estoque ajustado!');closeModal();nav('estoque');
}

async function salvarEstoque(editId){
  const nome=document.getElementById('e_nome').value.trim();
  if(!nome){toast('Informe o nome','error');return;}
  const row={est_id:EST,nome,cat:document.getElementById('e_cat').value,unidade:document.getElementById('e_unid').value,qtd:parseFloat(document.getElementById('e_qtd').value)||0,min:parseFloat(document.getElementById('e_min').value)||0,custo:parseFloat(document.getElementById('e_custo').value)||0};
  if(editId){
    if(supa&&!isLocal(editId)){const s=await dbUpdate('estoque',editId,row);if(!s)return;Object.assign(LOCAL.estoque.find(e=>e.id===editId),s);}
    else Object.assign(LOCAL.estoque.find(e=>e.id===editId),row);
    toast(t('salvo'));
  }else{
    if(supa){const s=await dbInsert('estoque',row);if(!s)return;LOCAL.estoque.push(s);}
    else LOCAL.estoque.push({id:uid(),...row});
    toast(t('salvo'));
  }
  closeModal();nav('estoque');
}

async function deletarEstoque(id){
  confirm2('Excluir este item?',async()=>{
    if(supa&&!isLocal(id)){const ok=await dbDelete('estoque',id);if(!ok)return;}
    LOCAL.estoque=LOCAL.estoque.filter(e=>e.id!==id);toast(t('removido'));nav('estoque');
  });
}

// ══════════════════════════════════════════
// FUNCIONÁRIOS
// ══════════════════════════════════════════
function pgFuncionarios(){
  let lista=(LOCAL.funcionarios||[]).filter(f=>f.est_id===EST);
  if(SEARCH)lista=lista.filter(f=>safeStr(f.nome).includes(SEARCH)||safeStr(f.cargo).includes(SEARCH));
  const ativos=lista.filter(f=>f.status==='ativo');
  const folha=ativos.reduce((s,f)=>s+Number(f.salario),0);
  return`
  <div class="metrics-grid mb-3">
    ${metricCard('Total equipe',lista.length,'ti-users','#2563EB','#eff6ff','','delta-neutral')}
    ${metricCard(t('ativos'),ativos.length,'ti-user-check','#16a34a','#f0fdf4','','delta-neutral')}
    ${metricCard(t('folha'),fmt(folha),'ti-cash','#dc2626','#fef2f2','','delta-neutral')}
    ${metricCard('Salário médio',fmt(ativos.length?folha/ativos.length:0),'ti-calculator','#7c3aed','#f5f3ff','','delta-neutral')}
  </div>
  <div class="card">
    <div class="table-wrap"><table>
      <thead><tr><th>Funcionário</th><th class="hide-sm">${t('cargo')}</th><th class="hide-sm">${t('telefone')}</th><th class="hide-sm">${t('admissao')}</th><th>${t('salario')}</th><th>${t('status')}</th><th style="text-align:right"></th></tr></thead>
      <tbody>${lista.length?lista.map(f=>`<tr>
        <td><div class="flex-cell"><div class="avatar" style="background:${avatarColor(f.nome)}">${initials(f.nome)}</div><div class="fw5">${f.nome}</div></div></td>
        <td class="hide-sm"><span class="badge badge-blue">${f.cargo}</span></td>
        <td class="hide-sm text-2">${f.tel||'—'}</td>
        <td class="hide-sm text-2">${fmtDate(f.admissao)}</td>
        <td class="fw6" style="font-family:monospace;font-size:13px">${fmt(f.salario)}</td>
        <td><span class="badge ${f.status==='ativo'?'badge-green':f.status==='ferias'?'badge-amber':'badge-gray'}">${t(f.status)||f.status}</span></td>
        <td><div class="td-actions"><button class="btn btn-ghost btn-sm" onclick="modalFuncionario('${f.id}')"><i class="ti ti-edit"></i></button><button class="btn btn-ghost btn-sm" style="color:var(--red)" onclick="deletarFunc('${f.id}')"><i class="ti ti-trash"></i></button></div></td>
      </tr>`).join(''):`<tr><td colspan="7"><div class="empty"><i class="ti ti-users"></i><div class="empty-title">${t('nenhum_item')}</div></div></td></tr>`}
      </tbody>
    </table></div>
  </div>`;
}

function modalFuncionario(editId){
  const f=editId?LOCAL.funcionarios.find(x=>x.id===editId):null;
  openModal(`
    <div class="modal-header"><div class="modal-title">${f?t('editar'):t('novo_funcionario')}</div><button class="btn btn-ghost btn-sm" onclick="closeModal()"><i class="ti ti-x"></i></button></div>
    <div class="modal-body">
      <div class="form-row cols-2">
        <div class="form-group"><label class="form-label">${t('nome')} *</label><input type="text" class="form-input" id="fn_nome" value="${f?.nome||''}"/></div>
        <div class="form-group"><label class="form-label">${t('cargo')} *</label><input type="text" class="form-input" id="fn_cargo" value="${f?.cargo||''}"/></div>
      </div>
      <div class="form-row cols-2">
        <div class="form-group"><label class="form-label">${t('salario')} *</label><div class="currency-wrap"><div class="currency-prefix">${MOEDA[CFG.moeda]}</div><input type="number" id="fn_sal" value="${f?.salario||''}" min="0" step="0.01"/></div></div>
        <div class="form-group"><label class="form-label">${t('status')}</label><select class="form-select" id="fn_status"><option value="ativo" ${f?.status==='ativo'||!f?'selected':''}>${t('ativo')}</option><option value="ferias" ${f?.status==='ferias'?'selected':''}>${t('ferias')}</option><option value="afastado" ${f?.status==='afastado'?'selected':''}>${t('afastado')}</option><option value="demitido" ${f?.status==='demitido'?'selected':''}>${t('demitido')}</option></select></div>
      </div>
      <div class="form-row cols-2">
        <div class="form-group"><label class="form-label">${t('telefone')}</label><input type="tel" class="form-input" id="fn_tel" value="${f?.tel||''}"/></div>
        <div class="form-group"><label class="form-label">${t('admissao')}</label><input type="date" class="form-input" id="fn_adm" value="${f?.admissao||today()}"/></div>
      </div>
    </div>
    <div class="modal-footer"><button class="btn btn-secondary" onclick="closeModal()">${t('cancelar')}</button><button class="btn btn-primary" onclick="salvarFunc('${editId||''}')"><i class="ti ti-check"></i> ${t('salvar')}</button></div>`);
}

async function salvarFunc(editId){
  const nome=document.getElementById('fn_nome').value.trim();
  const cargo=document.getElementById('fn_cargo').value.trim();
  const salario=parseFloat(document.getElementById('fn_sal').value)||0;
  if(!nome||!cargo){toast('Preencha nome e cargo','error');return;}
  if(!salario){toast('Informe o salário','error');return;}
  const row={est_id:EST,nome,cargo,salario,status:document.getElementById('fn_status').value,tel:document.getElementById('fn_tel').value.trim(),admissao:document.getElementById('fn_adm').value};
  if(editId){
    if(supa&&!isLocal(editId)){const s=await dbUpdate('funcionarios',editId,row);if(!s)return;Object.assign(LOCAL.funcionarios.find(f=>f.id===editId),s);}
    else Object.assign(LOCAL.funcionarios.find(f=>f.id===editId),row);
    toast(t('salvo'));
  }else{
    if(supa){const s=await dbInsert('funcionarios',row);if(!s)return;LOCAL.funcionarios.push(s);}
    else LOCAL.funcionarios.push({id:uid(),...row});
    toast(t('salvo'));
  }
  closeModal();nav('funcionarios');
}

async function deletarFunc(id){
  confirm2('Excluir funcionário?',async()=>{
    if(supa&&!isLocal(id)){const ok=await dbDelete('funcionarios',id);if(!ok)return;}
    LOCAL.funcionarios=LOCAL.funcionarios.filter(f=>f.id!==id);toast(t('removido'));nav('funcionarios');
  });
}

// ══════════════════════════════════════════
// CLIENTES
// ══════════════════════════════════════════
function pgClientes(){
  let lista=(LOCAL.clientes||[]).filter(c=>c.est_id===EST);
  if(SEARCH)lista=lista.filter(c=>safeStr(c.nome).includes(SEARCH)||(c.tel||'').includes(SEARCH));
  lista.sort((a,b)=>Number(b.total_gasto)-Number(a.total_gasto));
  return`
  <div class="metrics-grid mb-3">
    ${metricCard('Total',lista.length,'ti-address-book','#2563EB','#eff6ff','','delta-neutral')}
    ${metricCard('VIP (20+ visitas)',lista.filter(c=>Number(c.visitas)>=20).length,'ti-crown','#ca8a04','#fef9c3','','delta-neutral')}
    ${metricCard(t('total_faturado'),fmt(lista.reduce((s,c)=>s+Number(c.total_gasto||0),0)),'ti-cash','#16a34a','#f0fdf4','','delta-neutral')}
    ${metricCard(t('ticket_medio'),fmt(lista.length?lista.reduce((s,c)=>s+Number(c.total_gasto||0),0)/lista.length:0),'ti-receipt','#7c3aed','#f5f3ff','','delta-neutral')}
  </div>
  <div class="card">
    <div class="table-wrap"><table>
      <thead><tr><th>Cliente</th><th class="hide-sm">${t('telefone')}</th><th class="hide-sm" style="text-align:center">${t('visitas')}</th><th class="hide-sm">${t('ultima_visita')}</th><th>${t('total_gasto')}</th><th>${t('nível')}</th><th style="text-align:right"></th></tr></thead>
      <tbody>${lista.length?lista.map(c=>{
        const vis=Number(c.visitas||0);
        const nivel=vis>=20?['badge-amber','VIP ⭐']:vis>=10?['badge-blue',t('fiel')]:['badge-gray',t('novo')];
        return`<tr>
          <td><div class="flex-cell"><div class="avatar" style="background:${avatarColor(c.nome)}">${initials(c.nome)}</div><div class="fw5">${c.nome}</div></div></td>
          <td class="hide-sm text-2">${c.tel||'—'}</td>
          <td class="hide-sm" style="text-align:center;font-weight:600">${vis}</td>
          <td class="hide-sm text-2">${fmtDate(c.ultima)}</td>
          <td class="fw6" style="font-family:monospace;font-size:13px">${fmt(c.total_gasto)}</td>
          <td><span class="badge ${nivel[0]}">${nivel[1]}</span></td>
          <td><div class="td-actions"><button class="btn btn-ghost btn-sm" onclick="modalCliente('${c.id}')"><i class="ti ti-edit"></i></button><button class="btn btn-ghost btn-sm" style="color:var(--red)" onclick="deletarCliente('${c.id}')"><i class="ti ti-trash"></i></button></div></td>
        </tr>`;
      }).join(''):`<tr><td colspan="7"><div class="empty"><i class="ti ti-address-book"></i><div class="empty-title">${t('nenhum_item')}</div></div></td></tr>`}
      </tbody>
    </table></div>
  </div>`;
}

function modalCliente(editId){
  const c=editId?LOCAL.clientes.find(x=>x.id===editId):null;
  openModal(`
    <div class="modal-header"><div class="modal-title">${c?t('editar'):t('novo_cliente')}</div><button class="btn btn-ghost btn-sm" onclick="closeModal()"><i class="ti ti-x"></i></button></div>
    <div class="modal-body">
      <div class="form-row cols-2">
        <div class="form-group"><label class="form-label">${t('nome')} *</label><input type="text" class="form-input" id="cl_nome" value="${c?.nome||''}"/></div>
        <div class="form-group"><label class="form-label">${t('telefone')}</label><input type="tel" class="form-input" id="cl_tel" value="${c?.tel||''}"/></div>
      </div>
      <div class="form-row cols-2">
        <div class="form-group"><label class="form-label">E-mail</label><input type="email" class="form-input" id="cl_email" value="${c?.email||''}"/></div>
        <div class="form-group"><label class="form-label">Aniversário</label><input type="date" class="form-input" id="cl_aniver" value="${c?.aniver||''}"/></div>
      </div>
      <div class="form-row cols-3">
        <div class="form-group"><label class="form-label">${t('visitas')}</label><input type="number" class="form-input" id="cl_vis" value="${c?.visitas||0}" min="0"/></div>
        <div class="form-group"><label class="form-label">${t('total_gasto')}</label><input type="number" class="form-input" id="cl_total" value="${c?.total_gasto||0}" min="0" step="0.01"/></div>
        <div class="form-group"><label class="form-label">${t('ultima_visita')}</label><input type="date" class="form-input" id="cl_ultima" value="${c?.ultima||today()}"/></div>
      </div>
    </div>
    <div class="modal-footer"><button class="btn btn-secondary" onclick="closeModal()">${t('cancelar')}</button><button class="btn btn-primary" onclick="salvarCliente('${editId||''}')"><i class="ti ti-check"></i> ${t('salvar')}</button></div>`);
}

async function salvarCliente(editId){
  const nome=document.getElementById('cl_nome').value.trim();
  if(!nome){toast('Informe o nome','error');return;}
  const row={est_id:EST,nome,tel:document.getElementById('cl_tel').value.trim(),email:document.getElementById('cl_email').value.trim(),aniver:document.getElementById('cl_aniver').value,visitas:parseInt(document.getElementById('cl_vis').value)||0,total_gasto:parseFloat(document.getElementById('cl_total').value)||0,ultima:document.getElementById('cl_ultima').value};
  if(editId){
    if(supa&&!isLocal(editId)){const s=await dbUpdate('clientes',editId,row);if(!s)return;Object.assign(LOCAL.clientes.find(c=>c.id===editId),s);}
    else Object.assign(LOCAL.clientes.find(c=>c.id===editId),row);
    toast(t('salvo'));
  }else{
    if(supa){const s=await dbInsert('clientes',row);if(!s)return;LOCAL.clientes.push(s);}
    else LOCAL.clientes.push({id:uid(),...row});
    toast(t('salvo'));
  }
  closeModal();nav('clientes');
}

async function deletarCliente(id){
  confirm2('Excluir este cliente?',async()=>{
    if(supa&&!isLocal(id)){const ok=await dbDelete('clientes',id);if(!ok)return;}
    LOCAL.clientes=LOCAL.clientes.filter(c=>c.id!==id);toast(t('removido'));nav('clientes');
  });
}

// ══════════════════════════════════════════
// FORNECEDORES
// ══════════════════════════════════════════
function pgFornecedores(){
  let lista=(LOCAL.fornecedores||[]).filter(f=>f.est_id===EST);
  if(SEARCH)lista=lista.filter(f=>safeStr(f.nome).includes(SEARCH));
  return`<div class="card"><div class="table-wrap"><table>
    <thead><tr><th>${t('nome')}</th><th class="hide-sm">${t('categoria')}</th><th class="hide-sm">Contato</th><th class="hide-sm">${t('telefone')}</th><th class="hide-sm">Prazo pgto.</th><th>${t('status')}</th><th style="text-align:right"></th></tr></thead>
    <tbody>${lista.length?lista.map(f=>`<tr>
      <td class="fw5">${f.nome}</td>
      <td class="hide-sm"><span class="badge badge-blue">${f.cat}</span></td>
      <td class="hide-sm text-2">${f.contato||'—'}</td>
      <td class="hide-sm text-2">${f.tel||'—'}</td>
      <td class="hide-sm" style="text-align:center">${f.prazo_pagamento||'—'} dias</td>
      <td><span class="badge ${f.status==='ativo'?'badge-green':'badge-gray'}">${f.status==='ativo'?t('ativo'):t('inativo')}</span></td>
      <td><div class="td-actions"><button class="btn btn-ghost btn-sm" onclick="modalFornecedor('${f.id}')"><i class="ti ti-edit"></i></button><button class="btn btn-ghost btn-sm" style="color:var(--red)" onclick="deletarFornecedor('${f.id}')"><i class="ti ti-trash"></i></button></div></td>
    </tr>`).join(''):`<tr><td colspan="7"><div class="empty"><i class="ti ti-truck"></i><div class="empty-title">${t('nenhum_item')}</div></div></td></tr>`}
    </tbody>
  </table></div></div>`;
}

function modalFornecedor(editId){
  const f=editId?LOCAL.fornecedores.find(x=>x.id===editId):null;
  openModal(`
    <div class="modal-header"><div class="modal-title">${f?t('editar'):t('novo_fornecedor')}</div><button class="btn btn-ghost btn-sm" onclick="closeModal()"><i class="ti ti-x"></i></button></div>
    <div class="modal-body">
      <div class="form-row cols-2">
        <div class="form-group"><label class="form-label">${t('nome')} *</label><input type="text" class="form-input" id="fo_nome" value="${f?.nome||''}"/></div>
        <div class="form-group"><label class="form-label">${t('categoria')}</label><select class="form-select" id="fo_cat">${['Insumos','Frios','Bebidas','Embalagens','Limpeza','Equipamentos','Serviços','Outros'].map(c=>`<option ${f?.cat===c?'selected':''}>${c}</option>`).join('')}</select></div>
      </div>
      <div class="form-row cols-2">
        <div class="form-group"><label class="form-label">Contato</label><input type="text" class="form-input" id="fo_cont" value="${f?.contato||''}"/></div>
        <div class="form-group"><label class="form-label">${t('telefone')}</label><input type="tel" class="form-input" id="fo_tel" value="${f?.tel||''}"/></div>
      </div>
      <div class="form-row cols-2">
        <div class="form-group"><label class="form-label">E-mail</label><input type="email" class="form-input" id="fo_email" value="${f?.email||''}"/></div>
        <div class="form-group"><label class="form-label">Prazo pagamento (dias)</label><input type="number" class="form-input" id="fo_prazo" value="${f?.prazo_pagamento||30}" min="0"/></div>
      </div>
      <div class="form-group"><label class="form-label">${t('status')}</label><select class="form-select" id="fo_status"><option value="ativo" ${f?.status!=='inativo'?'selected':''}>${t('ativo')}</option><option value="inativo" ${f?.status==='inativo'?'selected':''}>${t('inativo')}</option></select></div>
    </div>
    <div class="modal-footer"><button class="btn btn-secondary" onclick="closeModal()">${t('cancelar')}</button><button class="btn btn-primary" onclick="salvarFornecedor('${editId||''}')"><i class="ti ti-check"></i> ${t('salvar')}</button></div>`);
}

async function salvarFornecedor(editId){
  const nome=document.getElementById('fo_nome').value.trim();
  if(!nome){toast('Informe o nome','error');return;}
  const row={est_id:EST,nome,cat:document.getElementById('fo_cat').value,contato:document.getElementById('fo_cont').value,tel:document.getElementById('fo_tel').value,email:document.getElementById('fo_email').value,prazo_pagamento:parseInt(document.getElementById('fo_prazo').value)||30,status:document.getElementById('fo_status').value};
  if(editId){
    if(supa&&!isLocal(editId)){const s=await dbUpdate('fornecedores',editId,row);if(!s)return;Object.assign(LOCAL.fornecedores.find(f=>f.id===editId),s);}
    else Object.assign(LOCAL.fornecedores.find(f=>f.id===editId),row);
    toast(t('salvo'));
  }else{
    if(supa){const s=await dbInsert('fornecedores',row);if(!s)return;LOCAL.fornecedores.push(s);}
    else LOCAL.fornecedores.push({id:uid(),...row});
    toast(t('salvo'));
  }
  closeModal();nav('fornecedores');
}

async function deletarFornecedor(id){
  confirm2('Excluir fornecedor?',async()=>{
    if(supa&&!isLocal(id)){const ok=await dbDelete('fornecedores',id);if(!ok)return;}
    LOCAL.fornecedores=LOCAL.fornecedores.filter(f=>f.id!==id);toast(t('removido'));nav('fornecedores');
  });
}

// ══════════════════════════════════════════
// CARDÁPIO
// ══════════════════════════════════════════
function pgCardapio(){
  let lista=(LOCAL.cardapio||[]).filter(c=>c.est_id===EST);
  if(SEARCH)lista=lista.filter(c=>safeStr(c.nome).includes(SEARCH));
  lista.sort((a,b)=>a.cat.localeCompare(b.cat)||a.nome.localeCompare(b.nome));
  const ativos=lista.filter(c=>c.ativo);
  const avgM=ativos.length?ativos.reduce((s,c)=>s+(Number(c.preco)-Number(c.custo))/Number(c.preco)*100,0)/ativos.length:0;
  return`
  <div class="metrics-grid mb-3">
    ${metricCard(t('ativo'),ativos.length,'ti-clipboard-check','#16a34a','#f0fdf4','','delta-neutral')}
    ${metricCard('Pausados',lista.filter(c=>!c.ativo).length,'ti-clipboard-off','#dc2626','#fef2f2','','delta-neutral')}
    ${metricCard(t('margem_label')+' média',fmtNum(avgM,1)+'%','ti-percentage','#2563EB','#eff6ff','','delta-neutral')}
    ${metricCard('Categorias',[...new Set(lista.map(c=>c.cat))].length,'ti-category','#7c3aed','#f5f3ff','','delta-neutral')}
  </div>
  <div class="card"><div class="table-wrap"><table>
    <thead><tr><th>${t('nome')}</th><th class="hide-sm">${t('categoria')}</th><th class="hide-sm">${t('descricao')}</th><th>${t('preco')}</th><th class="hide-sm">${t('custo')}</th><th>${t('margem_label')}</th><th>${t('status')}</th><th style="text-align:right"></th></tr></thead>
    <tbody>${lista.length?lista.map(c=>{
      const m=Number(c.preco)>0?(Number(c.preco)-Number(c.custo))/Number(c.preco)*100:0;
      return`<tr>
        <td class="fw5">${c.nome}</td>
        <td class="hide-sm"><span class="badge badge-gray">${c.cat}</span></td>
        <td class="hide-sm text-2 text-sm">${c.desc||'—'}</td>
        <td class="fw6" style="font-family:monospace;font-size:13px">${fmt(c.preco)}</td>
        <td class="hide-sm text-2" style="font-family:monospace;font-size:13px">${fmt(c.custo)}</td>
        <td><span class="badge ${m>=50?'badge-green':m>=30?'badge-blue':'badge-red'}">${fmtNum(m,1)}%</span></td>
        <td><span class="badge ${c.ativo?'badge-green':'badge-gray'}">${c.ativo?t('ativo'):'Pausado'}</span></td>
        <td><div class="td-actions">
          <button class="btn btn-ghost btn-sm" onclick="modalCardapio('${c.id}')"><i class="ti ti-edit"></i></button>
          <button class="btn btn-ghost btn-sm" onclick="toggleCardapio('${c.id}')"><i class="ti ${c.ativo?'ti-player-pause':'ti-player-play'}"></i></button>
          <button class="btn btn-ghost btn-sm" style="color:var(--red)" onclick="deletarCardapio('${c.id}')"><i class="ti ti-trash"></i></button>
        </div></td>
      </tr>`;
    }).join(''):`<tr><td colspan="8"><div class="empty"><i class="ti ti-clipboard-list"></i><div class="empty-title">${t('nenhum_item')}</div></div></td></tr>`}
    </tbody>
  </table></div></div>`;
}

function modalCardapio(editId){
  const c=editId?LOCAL.cardapio.find(x=>x.id===editId):null;
  openModal(`
    <div class="modal-header"><div class="modal-title">${c?t('editar'):t('novo_item')}</div><button class="btn btn-ghost btn-sm" onclick="closeModal()"><i class="ti ti-x"></i></button></div>
    <div class="modal-body">
      <div class="form-row cols-2">
        <div class="form-group"><label class="form-label">${t('nome')} *</label><input type="text" class="form-input" id="cd_nome" value="${c?.nome||''}"/></div>
        <div class="form-group"><label class="form-label">${t('categoria')}</label><select class="form-select" id="cd_cat">${['Pizzas','Massas','Carnes','Saladas','Lanches','Bebidas','Sucos','Sobremesas','Combos','Outros'].map(x=>`<option ${c?.cat===x?'selected':''}>${x}</option>`).join('')}</select></div>
      </div>
      <div class="form-group mb-2"><label class="form-label">${t('descricao')}</label><input type="text" class="form-input" id="cd_desc" value="${c?.desc||''}"/></div>
      <div class="form-row cols-2">
        <div class="form-group"><label class="form-label">${t('preco')} *</label><div class="currency-wrap"><div class="currency-prefix">${MOEDA[CFG.moeda]}</div><input type="number" id="cd_preco" value="${c?.preco||''}" min="0" step="0.01" oninput="previewMargin()"/></div></div>
        <div class="form-group"><label class="form-label">${t('custo')}</label><div class="currency-wrap"><div class="currency-prefix">${MOEDA[CFG.moeda]}</div><input type="number" id="cd_custo" value="${c?.custo||0}" min="0" step="0.01" oninput="previewMargin()"/></div></div>
      </div>
      <div id="cd_preview" style="background:var(--bg);border-radius:var(--radius);padding:.75rem;font-size:13px">Margem: preencha o preço acima</div>
    </div>
    <div class="modal-footer"><button class="btn btn-secondary" onclick="closeModal()">${t('cancelar')}</button><button class="btn btn-primary" onclick="salvarCardapio('${editId||''}')"><i class="ti ti-check"></i> ${t('salvar')}</button></div>`);
  previewMargin();
}

function previewMargin(){
  const p=parseFloat(document.getElementById('cd_preco')?.value)||0;
  const c=parseFloat(document.getElementById('cd_custo')?.value)||0;
  const el=document.getElementById('cd_preview');if(!el)return;
  if(p>0){const m=(p-c)/p*100;el.innerHTML=`${t('margem_label')}: <strong style="color:${m>=50?'#16a34a':m>=30?'#2563EB':'#dc2626'}">${fmtNum(m,1)}%</strong> · Lucro/unid: <strong>${fmt(p-c)}</strong>`;}
  else el.textContent='Margem: preencha o preço acima';
}

async function salvarCardapio(editId){
  const nome=document.getElementById('cd_nome').value.trim();
  const preco=parseFloat(document.getElementById('cd_preco').value)||0;
  if(!nome){toast('Informe o nome','error');return;}
  if(!preco){toast('Informe o preço','error');return;}
  const row={est_id:EST,nome,cat:document.getElementById('cd_cat').value,desc:document.getElementById('cd_desc').value.trim(),preco,custo:parseFloat(document.getElementById('cd_custo').value)||0,ativo:editId?(LOCAL.cardapio.find(c=>c.id===editId)?.ativo??true):true};
  if(editId){
    if(supa&&!isLocal(editId)){const s=await dbUpdate('cardapio',editId,row);if(!s)return;Object.assign(LOCAL.cardapio.find(c=>c.id===editId),s);}
    else Object.assign(LOCAL.cardapio.find(c=>c.id===editId),row);
    toast(t('salvo'));
  }else{
    if(supa){const s=await dbInsert('cardapio',row);if(!s)return;LOCAL.cardapio.push(s);}
    else LOCAL.cardapio.push({id:uid(),...row});
    toast(t('salvo'));
  }
  closeModal();nav('cardapio');
}

async function toggleCardapio(id){
  const item=LOCAL.cardapio.find(c=>c.id===id);if(!item)return;
  item.ativo=!item.ativo;
  if(supa&&!isLocal(id))await dbUpdate('cardapio',id,{ativo:item.ativo});
  toast(item.ativo?t('ativo'):'Pausado');nav('cardapio');
}

async function deletarCardapio(id){
  confirm2('Excluir item?',async()=>{
    if(supa&&!isLocal(id)){const ok=await dbDelete('cardapio',id);if(!ok)return;}
    LOCAL.cardapio=LOCAL.cardapio.filter(c=>c.id!==id);toast(t('removido'));nav('cardapio');
  });
}

// ══════════════════════════════════════════
// FISCAL
// ══════════════════════════════════════════
function pgFiscal(){
  let lista=(LOCAL.fiscal||[]).filter(f=>f.est_id===EST);
  if(SEARCH)lista=lista.filter(f=>safeStr(f.desc).includes(SEARCH));
  const pendente=lista.filter(f=>f.status==='aberto').reduce((s,f)=>s+Number(f.valor),0);
  const pago=lista.filter(f=>f.status==='pago').reduce((s,f)=>s+Number(f.valor),0);
  return`
  <div class="metrics-grid mb-3">
    ${metricCard('Obrigações abertas',lista.filter(f=>f.status==='aberto').length,'ti-alert-circle','#dc2626','#fef2f2','','delta-neutral')}
    ${metricCard('Total pendente',fmt(pendente),'ti-clock','#d97706','#fffbeb','','delta-neutral')}
    ${metricCard('Já pago',fmt(pago),'ti-circle-check','#16a34a','#f0fdf4','','delta-neutral')}
    ${metricCard('Total período',fmt(pendente+pago),'ti-receipt-2','#2563EB','#eff6ff','','delta-neutral')}
  </div>
  <div class="card"><div class="table-wrap"><table>
    <thead><tr><th>${t('descricao')}</th><th class="hide-sm">${t('tipo')}</th><th>${t('vencimento')}</th><th class="hide-sm">Dias</th><th>${t('valor')}</th><th>${t('status')}</th><th class="hide-sm">${t('pago_em')}</th><th style="text-align:right"></th></tr></thead>
    <tbody>${lista.sort((a,b)=>a.venc.localeCompare(b.venc)).map(f=>{
      const dias=daysUntil(f.venc);
      const urg=f.status==='aberto'&&dias!==null&&dias<=5;
      const diasTxt=dias===null?'':dias<0?Math.abs(dias)+' '+t('em_atraso'):dias===0?t('hoje'):dias+' '+t('dias_restantes');
      return`<tr>
        <td class="fw5">${f.desc}</td>
        <td class="hide-sm"><span class="badge badge-gray">${f.tipo}</span></td>
        <td class="nowrap">${fmtDate(f.venc)}</td>
        <td class="hide-sm" style="color:${urg||diasTxt.includes(t('em_atraso'))?'#dc2626':'var(--text-2)'};font-weight:${urg?600:400};font-size:12px">${diasTxt}</td>
        <td class="fw6 nowrap" style="font-family:monospace;font-size:13px">${fmt(f.valor)}</td>
        <td><span class="badge ${f.status==='pago'?'badge-green':urg?'badge-red':'badge-amber'}">${f.status==='pago'?t('pago'):urg?t('urgente'):t('pendente')}</span></td>
        <td class="hide-sm text-2">${fmtDate(f.pago_em)}</td>
        <td><div class="td-actions">
          ${f.status==='aberto'?`<button class="btn btn-success btn-sm" onclick="marcarPago('${f.id}')"><i class="ti ti-check"></i> ${t('pagar')}</button>`:''}
          <button class="btn btn-ghost btn-sm" onclick="modalFiscal('${f.id}')"><i class="ti ti-edit"></i></button>
          <button class="btn btn-ghost btn-sm" style="color:var(--red)" onclick="deletarFiscal('${f.id}')"><i class="ti ti-trash"></i></button>
        </div></td>
      </tr>`;
    }).join('')}
    </tbody>
  </table></div></div>`;
}

function modalFiscal(editId){
  const f=editId?LOCAL.fiscal.find(x=>x.id===editId):null;
  openModal(`
    <div class="modal-header"><div class="modal-title">${f?t('editar'):t('novo_fiscal')}</div><button class="btn btn-ghost btn-sm" onclick="closeModal()"><i class="ti ti-x"></i></button></div>
    <div class="modal-body">
      <div class="form-row cols-2">
        <div class="form-group"><label class="form-label">${t('descricao')} *</label><input type="text" class="form-input" id="fi_desc" value="${f?.desc||''}" placeholder="Ex: ISSQN Maio/2026"/></div>
        <div class="form-group"><label class="form-label">${t('tipo')}</label><select class="form-select" id="fi_tipo">${['imposto','simples','aluguel','seguro','contabilidade','outro'].map(x=>`<option ${f?.tipo===x?'selected':''}>${x}</option>`).join('')}</select></div>
      </div>
      <div class="form-row cols-2">
        <div class="form-group"><label class="form-label">${t('valor')} *</label><div class="currency-wrap"><div class="currency-prefix">${MOEDA[CFG.moeda]}</div><input type="number" id="fi_val" value="${f?.valor||''}" min="0" step="0.01"/></div></div>
        <div class="form-group"><label class="form-label">${t('vencimento')} *</label><input type="date" class="form-input" id="fi_venc" value="${f?.venc||today()}"/></div>
      </div>
    </div>
    <div class="modal-footer"><button class="btn btn-secondary" onclick="closeModal()">${t('cancelar')}</button><button class="btn btn-primary" onclick="salvarFiscal('${editId||''}')"><i class="ti ti-check"></i> ${t('salvar')}</button></div>`);
}

async function salvarFiscal(editId){
  const desc=document.getElementById('fi_desc').value.trim();
  const valor=parseFloat(document.getElementById('fi_val').value)||0;
  const venc=document.getElementById('fi_venc').value;
  if(!desc||!valor||!venc){toast('Preencha todos os campos','error');return;}
  const row={est_id:EST,desc,tipo:document.getElementById('fi_tipo').value,valor,venc,status:'aberto',pago_em:''};
  if(editId){
    if(supa&&!isLocal(editId)){const s=await dbUpdate('fiscal',editId,row);if(!s)return;Object.assign(LOCAL.fiscal.find(f=>f.id===editId),s);}
    else Object.assign(LOCAL.fiscal.find(f=>f.id===editId),row);
    toast(t('salvo'));
  }else{
    if(supa){const s=await dbInsert('fiscal',row);if(!s)return;LOCAL.fiscal.push(s);}
    else LOCAL.fiscal.push({id:uid(),...row});
    toast(t('salvo'));
  }
  closeModal();nav('fiscal');
}

async function marcarPago(id){
  const f=LOCAL.fiscal.find(x=>x.id===id);if(!f)return;
  f.status='pago';f.pago_em=today();
  if(supa&&!isLocal(id))await dbUpdate('fiscal',id,{status:'pago',pago_em:f.pago_em});
  toast(t('pago')+' ✓');nav('fiscal');
}

async function deletarFiscal(id){
  confirm2('Excluir obrigação?',async()=>{
    if(supa&&!isLocal(id)){const ok=await dbDelete('fiscal',id);if(!ok)return;}
    LOCAL.fiscal=LOCAL.fiscal.filter(f=>f.id!==id);toast(t('removido'));nav('fiscal');
  });
}

// ══════════════════════════════════════════
// METAS
// ══════════════════════════════════════════
function pgMetas(){
  const metas=(LOCAL.metas||[]).filter(m=>m.est_id===EST);
  return`<div class="grid-3">${metas.length?metas.map(m=>{
    const pct=Math.min(100,Math.round(Number(m.atual)/Number(m.meta)*100));
    const dias=daysUntil(m.prazo);
    const cor=pct>=100?'#16a34a':pct>=70?'#2563EB':'#d97706';
    const bClass=pct>=100?'badge-green':pct>=70?'badge-blue':'badge-amber';
    return`<div class="card">
      <div class="flex-between mb-2"><span class="badge badge-gray">${m.cat}</span><div class="td-actions"><button class="btn btn-ghost btn-sm" onclick="modalMeta('${m.id}')"><i class="ti ti-edit"></i></button><button class="btn btn-ghost btn-sm" style="color:var(--red)" onclick="deletarMeta('${m.id}')"><i class="ti ti-trash"></i></button></div></div>
      <div style="font-size:15px;font-weight:700;margin-bottom:4px">${m.nome}</div>
      <div class="text-2 text-sm mb-2">${t('prazo')}: ${fmtDate(m.prazo)} · ${dias!==null?(dias<0?Math.abs(dias)+' '+t('em_atraso'):dias+' '+t('dias_restantes')):'—'}</div>
      <div class="flex-between mb-1">
        <div><div class="text-xs text-3">${t('valor_atual')}</div><div style="font-size:16px;font-weight:700">${m.unidade==='R$'?fmt(m.atual):fmtNum(m.atual,1)+' '+m.unidade}</div></div>
        <div style="text-align:right"><div class="text-xs text-3">${t('meta_valor')}</div><div style="font-size:16px;font-weight:700">${m.unidade==='R$'?fmt(m.meta):fmtNum(m.meta,1)+' '+m.unidade}</div></div>
      </div>
      <div class="progress mb-2"><div class="progress-fill" style="width:${pct}%;background:${cor}"></div></div>
      <div class="flex-between"><span class="badge ${bClass}">${pct>=100?t('atingida'):pct>=70?t('em_progresso'):t('atencao')}</span><span style="font-size:22px;font-weight:800;color:${cor}">${pct}%</span></div>
    </div>`;
  }).join(''):`<div class="card" style="grid-column:1/-1"><div class="empty"><i class="ti ti-target"></i><div class="empty-title">${t('nenhum_item')}</div></div></div>`}</div>`;
}

function modalMeta(editId){
  const m=editId?LOCAL.metas.find(x=>x.id===editId):null;
  openModal(`
    <div class="modal-header"><div class="modal-title">${m?t('editar'):t('nova_meta')}</div><button class="btn btn-ghost btn-sm" onclick="closeModal()"><i class="ti ti-x"></i></button></div>
    <div class="modal-body">
      <div class="form-group mb-2"><label class="form-label">${t('nome')} *</label><input type="text" class="form-input" id="mt_nome" value="${m?.nome||''}"/></div>
      <div class="form-row cols-3">
        <div class="form-group"><label class="form-label">${t('valor_atual')}</label><input type="number" class="form-input" id="mt_atual" value="${m?.atual||0}" step="0.01"/></div>
        <div class="form-group"><label class="form-label">${t('meta_valor')} *</label><input type="number" class="form-input" id="mt_meta" value="${m?.meta||''}" step="0.01"/></div>
        <div class="form-group"><label class="form-label">${t('unidade')}</label><select class="form-select" id="mt_unid"><option value="R$" ${m?.unidade==='R$'?'selected':''}>R$</option><option value="%" ${m?.unidade==='%'?'selected':''}>%</option><option value="clientes" ${m?.unidade==='clientes'?'selected':''}>Clientes</option><option value="pedidos" ${m?.unidade==='pedidos'?'selected':''}>Pedidos</option></select></div>
      </div>
      <div class="form-row cols-2">
        <div class="form-group"><label class="form-label">${t('prazo')}</label><input type="date" class="form-input" id="mt_prazo" value="${m?.prazo||today()}"/></div>
        <div class="form-group"><label class="form-label">${t('categoria')}</label><select class="form-select" id="mt_cat"><option value="financeiro" ${m?.cat==='financeiro'?'selected':''}>Financeiro</option><option value="vendas" ${m?.cat==='vendas'?'selected':''}>Vendas</option><option value="operacional" ${m?.cat==='operacional'?'selected':''}>Operacional</option></select></div>
      </div>
    </div>
    <div class="modal-footer"><button class="btn btn-secondary" onclick="closeModal()">${t('cancelar')}</button><button class="btn btn-primary" onclick="salvarMeta('${editId||''}')"><i class="ti ti-check"></i> ${t('salvar')}</button></div>`);
}

async function salvarMeta(editId){
  const nome=document.getElementById('mt_nome').value.trim();
  const meta=parseFloat(document.getElementById('mt_meta').value)||0;
  if(!nome||!meta){toast('Preencha nome e meta','error');return;}
  const row={est_id:EST,nome,atual:parseFloat(document.getElementById('mt_atual').value)||0,meta,unidade:document.getElementById('mt_unid').value,prazo:document.getElementById('mt_prazo').value,cat:document.getElementById('mt_cat').value};
  if(editId){
    if(supa&&!isLocal(editId)){const s=await dbUpdate('metas',editId,row);if(!s)return;Object.assign(LOCAL.metas.find(m=>m.id===editId),s);}
    else Object.assign(LOCAL.metas.find(m=>m.id===editId),row);
    toast(t('salvo'));
  }else{
    if(supa){const s=await dbInsert('metas',row);if(!s)return;LOCAL.metas.push(s);}
    else LOCAL.metas.push({id:uid(),...row});
    toast(t('salvo'));
  }
  closeModal();nav('metas');
}

async function deletarMeta(id){
  confirm2('Excluir meta?',async()=>{
    if(supa&&!isLocal(id)){const ok=await dbDelete('metas',id);if(!ok)return;}
    LOCAL.metas=LOCAL.metas.filter(m=>m.id!==id);toast(t('removido'));nav('metas');
  });
}

// ══════════════════════════════════════════
// RELATÓRIOS
// ══════════════════════════════════════════
function pgRelatorios(){
  const txs=txEst();
  const catR={},catD={};
  txs.forEach(x=>{const v=Number(x.valor);x.tipo==='receita'?catR[x.cat]=(catR[x.cat]||0)+v:catD[x.cat]=(catD[x.cat]||0)+v;});
  const topR=Object.entries(catR).sort((a,b)=>b[1]-a[1]).slice(0,5);
  const topD=Object.entries(catD).sort((a,b)=>b[1]-a[1]).slice(0,5);
  return`
  <div class="grid-2 mb-3">
    <div class="card"><div class="card-header"><div class="card-title">${t('top_receitas')}</div></div>
      ${topR.map(([k,v],i)=>`<div class="stat-row"><div class="flex-cell"><span class="text-xs fw6 text-3" style="min-width:16px">${i+1}</span><span class="fw5">${k}</span></div><span class="fw6" style="color:#16a34a;font-family:monospace;font-size:13px">${fmt(v)}</span></div>`).join('')}
    </div>
    <div class="card"><div class="card-header"><div class="card-title">${t('top_despesas')}</div></div>
      ${topD.map(([k,v],i)=>`<div class="stat-row"><div class="flex-cell"><span class="text-xs fw6 text-3" style="min-width:16px">${i+1}</span><span class="fw5">${k}</span></div><span class="fw6" style="color:#dc2626;font-family:monospace;font-size:13px">${fmt(v)}</span></div>`).join('')}
    </div>
  </div>
  <div class="card mb-3"><div class="card-header"><div class="card-title">${t('evolucao')}</div></div><div class="chart-wrap" style="height:240px"><canvas id="chartRel"></canvas></div></div>
  <div class="grid-2">
    <div class="card"><div class="card-header"><div class="card-title">${t('analise_cardapio')}</div></div>
      <div class="table-wrap"><table><thead><tr><th>Item</th><th style="text-align:right">${t('preco')}</th><th style="text-align:right">${t('margem_label')}</th></tr></thead>
      <tbody>${(LOCAL.cardapio||[]).filter(c=>c.est_id===EST&&c.ativo).sort((a,b)=>(Number(b.preco)-Number(b.custo))/Number(b.preco)-(Number(a.preco)-Number(a.custo))/Number(a.preco)).slice(0,6).map(c=>{const m=(Number(c.preco)-Number(c.custo))/Number(c.preco)*100;return`<tr><td>${c.nome}</td><td style="text-align:right;font-family:monospace;font-size:12px">${fmt(c.preco)}</td><td style="text-align:right"><span class="badge ${m>=50?'badge-green':m>=30?'badge-blue':'badge-red'}">${fmtNum(m,1)}%</span></td></tr>`;}).join('')}</tbody>
      </table></div>
    </div>
    <div class="card"><div class="card-header"><div class="card-title">${t('ranking_clientes')}</div></div>
      <div class="table-wrap"><table><thead><tr><th>Cliente</th><th style="text-align:center">${t('visitas')}</th><th style="text-align:right">Total</th></tr></thead>
      <tbody>${(LOCAL.clientes||[]).filter(c=>c.est_id===EST).sort((a,b)=>Number(b.total_gasto)-Number(a.total_gasto)).slice(0,6).map(c=>`
        <tr><td><div class="flex-cell"><div class="avatar" style="background:${avatarColor(c.nome)};width:24px;height:24px;font-size:10px">${initials(c.nome)}</div>${c.nome}</div></td>
        <td style="text-align:center">${c.visitas||0}</td>
        <td style="text-align:right;font-weight:700;font-family:monospace;font-size:13px">${fmt(c.total_gasto)}</td></tr>`).join('')}
      </tbody></table></div>
    </div>
  </div>`;
}

function renderRelCharts(){
  const ctx=document.getElementById('chartRel');if(!ctx)return;
  const rec=totalR(),desp=totalD();
  chartInstances.rel=new Chart(ctx,{type:'bar',data:{labels:['Jan','Fev','Mar','Abr','Mai'],datasets:[
    {label:t('receitas'),data:[22000,25000,24000,26000,rec],backgroundColor:'#2563EB22',borderColor:'#2563EB',borderWidth:2,borderRadius:5,borderSkipped:false},
    {label:t('despesas'),data:[16000,18000,17500,19000,desp],backgroundColor:'#dc262622',borderColor:'#dc2626',borderWidth:2,borderRadius:5,borderSkipped:false},
    {label:t('lucro'),data:[6000,7000,6500,7000,rec-desp],type:'line',borderColor:'#16a34a',backgroundColor:'#16a34a18',fill:true,tension:.4,pointRadius:4,pointBackgroundColor:'#16a34a'},
  ]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{labels:{font:{size:11,family:'Inter'},boxWidth:12}}},scales:{x:{grid:{display:false}},y:{grid:{color:'rgba(150,150,150,.08)'},ticks:{callback:v=>'R$'+fmtNum(v/1000,0)+'k'}}}}});
}

// ══════════════════════════════════════════
// CONFIGURAÇÕES
// ══════════════════════════════════════════
function pgConfig(){
  const corAtual=CFG.accentColor||'#2563EB';
  const userEmail=AUTH_USER?.email||CFG.email||'';
  return`
  ${AUTH_USER?`<div class="card mb-3" style="border-left:3px solid var(--green);border-radius:0 var(--radius-lg) var(--radius-lg) 0">
    <div class="card-header">
      <div style="display:flex;align-items:center;gap:10px">
        <div style="width:40px;height:40px;border-radius:50%;background:var(--accent);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:#fff">${initials(CFG.responsavel||'U')}</div>
        <div><div style="font-size:15px;font-weight:600">${CFG.responsavel||'Usuário'}</div><div style="font-size:12px;color:var(--text-2)">${userEmail}</div></div>
      </div>
      <span class="badge badge-green">● Conectado</span>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      <button class="btn btn-secondary" onclick="mudarSenha()"><i class="ti ti-key"></i> Alterar senha</button>
      <button class="btn btn-danger" onclick="fazerLogout()"><i class="ti ti-logout"></i> Sair da conta</button>
    </div>
  </div>`:`<div class="card mb-3" style="border-left:3px solid var(--amber);border-radius:0 var(--radius-lg) var(--radius-lg) 0">
    <div class="card-header"><div class="card-title">Modo demonstração</div><span class="badge badge-amber">● Demo</span></div>
    <div style="font-size:13px;color:var(--text-2);margin-bottom:1rem">Você está usando o sistema sem conta. Os dados não são salvos na nuvem e serão perdidos ao fechar o navegador.</div>
    <button class="btn btn-primary" onclick="showAuthScreen('register')"><i class="ti ti-user-plus"></i> Criar conta grátis</button>
    <button class="btn btn-secondary" style="margin-left:8px" onclick="showAuthScreen('login')"><i class="ti ti-login"></i> Entrar</button>
  </div>`}
  <div class="card mb-3" style="border-left:3px solid var(--accent);border-radius:0 var(--radius-lg) var(--radius-lg) 0">
    <div class="card-header"><div><div class="card-title"><i class="ti ti-wand" style="color:var(--accent);margin-right:6px"></i>Wizard de configuração</div><div class="card-sub">Refaça o setup inicial de forma guiada</div></div></div>
    <div style="font-size:13px;color:var(--text-2);margin-bottom:1rem">Altere tipo de negócio, módulos ativos, aparência e muito mais em poucos passos.</div>
    <button class="btn btn-secondary" onclick="CFG.firstRun=true;saveCFG();location.reload()"><i class="ti ti-refresh"></i> Refazer configuração inicial</button>
  </div>
  <div class="grid-2 mb-3">
    <div class="card">
      <div class="card-header"><div class="card-title">${t('perfil')}</div></div>
      <div class="form-group mb-2"><label class="form-label">${t('nome')}</label><input type="text" class="form-input" id="cfg_nome" value="${CFG.nome}"/></div>
      <div class="form-group mb-2"><label class="form-label">Responsável</label><input type="text" class="form-input" id="cfg_resp" value="${CFG.responsavel}"/></div>
      <div class="form-group mb-3">
        <label class="form-label">${t('moeda')}</label>
        <select class="form-select" id="cfg_moeda" style="color:var(--text);background:var(--surface)">
          <option value="BRL" ${CFG.moeda==='BRL'?'selected':''} style="color:#111827;background:#fff">R$ Real (BRL)</option>
          <option value="USD" ${CFG.moeda==='USD'?'selected':''} style="color:#111827;background:#fff">$ Dólar (USD)</option>
          <option value="EUR" ${CFG.moeda==='EUR'?'selected':''} style="color:#111827;background:#fff">€ Euro (EUR)</option>
        </select>
      </div>
      <button class="btn btn-primary" onclick="salvarCfg()"><i class="ti ti-check"></i> ${t('salvar')}</button>
    </div>
    <div class="card">
      <div class="card-header"><div class="card-title">${t('idioma')}</div></div>
      <div class="form-group mb-3">
        <select class="form-select" id="cfg_lang" style="color:var(--text);background:var(--surface);font-size:14px;padding:.6rem .75rem" onchange="mudaLang(this.value)">
          <option value="pt-BR" ${CFG.lang==='pt-BR'?'selected':''} style="color:#111827;background:#fff">🇧🇷 Português (BR)</option>
          <option value="en"    ${CFG.lang==='en'?'selected':''}    style="color:#111827;background:#fff">🇺🇸 English</option>
          <option value="es"    ${CFG.lang==='es'?'selected':''}    style="color:#111827;background:#fff">🇪🇸 Español</option>
          <option value="fr"    ${CFG.lang==='fr'?'selected':''}    style="color:#111827;background:#fff">🇫🇷 Français</option>
        </select>
      </div>
      <div class="card-header" style="padding:0;margin-bottom:.75rem;border:none"><div class="card-title">${t('tema')}</div></div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:1rem">
        ${[['light','ti-sun',t('tema_claro')],['dark','ti-moon',t('tema_escuro')],['system','ti-device-laptop',t('tema_ambiente')]].map(([v,ic,lb])=>{
          const active=CFG.theme===v;
          return`<button onclick="mudaTema('${v}')" style="display:flex;flex-direction:column;align-items:center;gap:6px;padding:.75rem .5rem;border:2px solid ${active?'var(--accent)':'var(--border-dark)'};border-radius:var(--radius-lg);background:${active?'var(--accent-light)':'var(--surface)'};cursor:pointer;transition:all .15s;font-family:inherit">
            <i class="ti ${ic}" style="font-size:22px;color:${active?'var(--accent)':'var(--text-2)'}"></i>
            <span style="font-size:12px;font-weight:${active?'700':'500'};color:${active?'var(--accent)':'var(--text-2)'}">${lb}</span>
          </button>`;
        }).join('')}
      </div>
      <div class="card-header" style="padding:0;margin-bottom:.75rem;border:none"><div class="card-title">Cor de destaque</div></div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">
        ${[['#2563EB','Azul'],['#16a34a','Verde'],['#7c3aed','Roxo'],['#dc2626','Vermelho'],['#d97706','Âmbar'],['#0891b2','Turquesa'],['#db2777','Rosa'],['#475569','Cinza']].map(([hex,lb])=>{
          const active=(CFG.accentColor||'#2563EB')===hex;
          return`<button onclick="mudarCor('${hex}')" style="display:flex;flex-direction:column;align-items:center;gap:5px;padding:.6rem .25rem;border:2px solid ${active?hex:'var(--border)'};border-radius:var(--radius-lg);background:${active?hex+'18':'var(--surface)'};cursor:pointer;font-family:inherit;transition:all .15s">
            <div style="width:26px;height:26px;border-radius:50%;background:${hex};${active?'box-shadow:0 0 0 3px '+hex+'44':''}"></div>
            <span style="font-size:11px;font-weight:500;color:var(--text-2)">${lb}</span>
          </button>`;
        }).join('')}
      </div>
    </div>
  </div>

  <div class="card mb-3">
    <div class="card-header"><div><div class="card-title"><i class="ti ti-database" style="color:#16a34a;margin-right:6px"></i>${t('banco_dados')}</div></div><span class="badge ${CFG.ok?'badge-green':'badge-amber'}">${CFG.ok?'● '+t('online'):'● '+t('modo_demo')}</span></div>
    <div style="background:${CFG.ok?'var(--green-bg)':'var(--amber-bg)'};border-radius:var(--radius);padding:.875rem 1rem;margin-bottom:1rem;font-size:13px;color:${CFG.ok?'var(--green)':'var(--amber)'}">${CFG.ok?'✓ '+t('conectado')+'.':'⚠ '+t('modo_demo_aviso')}</div>
    <div style="font-size:13px;color:var(--text-2);margin-bottom:1rem;padding:.75rem;background:var(--bg);border-radius:var(--radius);line-height:1.6">
      <strong>Atenção:</strong> Para salvar dados permanentemente (estoque, clientes, funcionários, etc.) você precisa conectar o Supabase. Sem ele, os dados são salvos só no navegador e podem ser perdidos ao limpar o cache.
    </div>
    <div class="form-row cols-2 mb-2">
      <div class="form-group"><label class="form-label">Project URL</label><input type="text" class="form-input" id="sb_url" value="${CFG.url}" placeholder="https://xxxx.supabase.co"/></div>
      <div class="form-group"><label class="form-label">Anon Key</label><input type="password" class="form-input" id="sb_key" value="${CFG.key}" placeholder="eyJh..."/></div>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      <button class="btn btn-primary" id="btnConectar" onclick="conectarSupa()"><i class="ti ti-database"></i> ${t('conectar_supabase')}</button>
      ${CFG.ok?`<button class="btn btn-secondary" onclick="recarregarTudo()"><i class="ti ti-refresh"></i> ${t('reconectar')}</button><button class="btn btn-danger" onclick="desconectar()"><i class="ti ti-plug-x"></i> ${t('desconectar')}</button>`:''}
    </div>
    <details style="margin-top:1rem">
      <summary style="font-size:12px;font-weight:600;color:var(--text-2);cursor:pointer;padding:.5rem 0">SQL — Execute no Supabase (SQL Editor → Run)</summary>
      <div style="font-family:monospace;font-size:11px;background:#111827;color:#e5e7eb;border-radius:var(--radius);padding:1rem;white-space:pre-wrap;overflow-x:auto;line-height:1.7;max-height:200px;overflow-y:auto;margin-top:.5rem">${getSQL()}</div>
    </details>
  </div>

  <div class="card">
    <div class="card-header"><div class="card-title">${t('estabelecimento')}</div><button class="btn btn-secondary btn-sm" onclick="modalEst()"><i class="ti ti-plus"></i> ${t('novo_estabelecimento')}</button></div>
    <div class="table-wrap"><table>
      <thead><tr><th>${t('nome')}</th><th>${t('tipo')}</th><th></th></tr></thead>
      <tbody>${LOCAL.estabelecimentos.map(e=>`<tr><td class="fw5">${e.nome}</td><td><span class="badge badge-blue">${e.tipo}</span></td><td style="text-align:right"><button class="btn btn-ghost btn-sm" onclick="modalEst('${e.id}')"><i class="ti ti-edit"></i></button></td></tr>`).join('')}</tbody>
    </table></div>
  </div>`;
}

function mudaLang(lang){ CFG.lang=lang; saveCFG(); nav('config'); }
function mudaTema(theme){ applyTheme(theme); saveCFG(); nav('config'); }
function mudarCor(hex){
  CFG.accentColor=hex;
  document.documentElement.style.setProperty('--accent', hex);
  document.documentElement.style.setProperty('--accent-dark', hex);
  // recalc accent-light based on theme
  const isDark=document.body.getAttribute('data-theme')==='dark';
  document.documentElement.style.setProperty('--accent-light', isDark ? hex+'30' : hex+'18');
  document.documentElement.style.setProperty('--accent-text', isDark ? hex+'dd' : hex);
  saveCFG(); nav('config');
}

function salvarCfg(){
  CFG.nome=document.getElementById('cfg_nome').value;
  CFG.responsavel=document.getElementById('cfg_resp').value;
  CFG.moeda=document.getElementById('cfg_moeda').value;
  saveCFG();applyConfig();toast(t('salvo'));nav('config');
}

function applyConfig(){
  document.getElementById('sbNome').textContent=CFG.nome||'GestãoOS';
  document.getElementById('sbNomeUser').textContent=CFG.responsavel||'Admin';
  document.getElementById('sbAvatar').textContent=initials(CFG.responsavel||'AD');
  document.getElementById('sbSub').textContent='Sistema de gestão';
  const emailEl=document.getElementById('sbEmailUser');
  if(emailEl)emailEl.textContent=AUTH_USER?.email||CFG.email||'Proprietário';
}

async function fazerLogout(){
  await signOut();
  CFG.ok=false;
  saveCFG();
  setConnUI(false);
  document.getElementById('bottomNav').style.display='none';
  showAuthScreen('login');
}

function mudarSenha(){
  openModal(`
    <div class="modal-header"><div class="modal-title">Alterar senha</div><button class="btn btn-ghost btn-sm" onclick="closeModal()"><i class="ti ti-x"></i></button></div>
    <div class="modal-body">
      <div id="senhaErr" style="display:none;background:var(--red-bg);color:var(--red);padding:.75rem;border-radius:var(--radius);font-size:13px;margin-bottom:1rem;border:1px solid #fecaca"></div>
      <div class="form-group mb-2"><label class="form-label">Nova senha</label><input type="password" class="form-input" id="novaSenha" placeholder="mínimo 6 caracteres"/></div>
      <div class="form-group"><label class="form-label">Confirmar nova senha</label><input type="password" class="form-input" id="novaSenha2"/></div>
    </div>
    <div class="modal-footer"><button class="btn btn-secondary" onclick="closeModal()">Cancelar</button><button class="btn btn-primary" onclick="confirmarSenha()"><i class="ti ti-check"></i> Salvar senha</button></div>`);
}

async function confirmarSenha(){
  const nova=document.getElementById('novaSenha').value;
  const nova2=document.getElementById('novaSenha2').value;
  const err=document.getElementById('senhaErr');
  if(nova.length<6){err.textContent='Senha deve ter ao menos 6 caracteres';err.style.display='block';return;}
  if(nova!==nova2){err.textContent='As senhas não coincidem';err.style.display='block';return;}
  const{error}=await supa.auth.updateUser({password:nova});
  if(error){err.textContent=error.message;err.style.display='block';return;}
  toast('Senha alterada com sucesso!');closeModal();
}

function modalEst(editId){
  const e=editId?LOCAL.estabelecimentos.find(x=>x.id===editId):null;
  openModal(`
    <div class="modal-header"><div class="modal-title">${e?t('editar'):t('novo_estabelecimento')}</div><button class="btn btn-ghost btn-sm" onclick="closeModal()"><i class="ti ti-x"></i></button></div>
    <div class="modal-body">
      <div class="form-row cols-2">
        <div class="form-group"><label class="form-label">${t('nome')} *</label><input type="text" class="form-input" id="est_nome" value="${e?.nome||''}"/></div>
        <div class="form-group"><label class="form-label">${t('tipo')}</label><select class="form-select" id="est_tipo">${['restaurante','pizzaria','lanchonete','bar','cafeteria','padaria','mercado','salão','academia','outro'].map(x=>`<option ${e?.tipo===x?'selected':''}>${x}</option>`).join('')}</select></div>
      </div>
    </div>
    <div class="modal-footer"><button class="btn btn-secondary" onclick="closeModal()">${t('cancelar')}</button><button class="btn btn-primary" onclick="salvarEst('${editId||''}')"><i class="ti ti-check"></i> ${t('salvar')}</button></div>`);
}

async function salvarEst(editId){
  const nome=document.getElementById('est_nome').value.trim();
  const tipo=document.getElementById('est_tipo').value;
  if(!nome){toast('Informe o nome','error');return;}
  if(editId){
    const e=LOCAL.estabelecimentos.find(x=>x.id===editId);
    if(e){e.nome=nome;e.tipo=tipo;}
    if(supa&&!isLocal(editId))await dbUpdate('estabelecimentos',editId,{nome,tipo});
    toast(t('salvo'));
  }else{
    const row={nome,tipo};
    if(supa){const s=await dbInsert('estabelecimentos',row);if(!s)return;LOCAL.estabelecimentos.push(s);}
    else LOCAL.estabelecimentos.push({id:uid(),nome,tipo});
    toast(t('salvo'));
  }
  renderEstSelect();closeModal();nav('config');
}

function getSQL(){return`create table if not exists estabelecimentos(id uuid default gen_random_uuid() primary key,nome text,tipo text,created_at timestamptz default now());
create table if not exists transacoes(id uuid default gen_random_uuid() primary key,est_id uuid references estabelecimentos(id) on delete cascade,tipo text,valor numeric(12,2),descricao text,cat text,data date,obs text,created_at timestamptz default now());
create table if not exists estoque(id uuid default gen_random_uuid() primary key,est_id uuid references estabelecimentos(id) on delete cascade,nome text,cat text,qtd numeric,min numeric,custo numeric,unidade text,updated_at timestamptz default now());
create table if not exists funcionarios(id uuid default gen_random_uuid() primary key,est_id uuid references estabelecimentos(id) on delete cascade,nome text,cargo text,salario numeric,status text,tel text,admissao date);
create table if not exists clientes(id uuid default gen_random_uuid() primary key,est_id uuid references estabelecimentos(id) on delete cascade,nome text,tel text,email text,visitas int,total_gasto numeric,ultima date,aniver date);
create table if not exists fornecedores(id uuid default gen_random_uuid() primary key,est_id uuid references estabelecimentos(id) on delete cascade,nome text,cat text,contato text,tel text,email text,prazo_pagamento int,status text);
create table if not exists cardapio(id uuid default gen_random_uuid() primary key,est_id uuid references estabelecimentos(id) on delete cascade,nome text,cat text,descricao text,preco numeric,custo numeric,ativo boolean default true);
create table if not exists fiscal(id uuid default gen_random_uuid() primary key,est_id uuid references estabelecimentos(id) on delete cascade,descricao text,tipo text,valor numeric,venc date,status text,pago_em date);
create table if not exists metas(id uuid default gen_random_uuid() primary key,est_id uuid references estabelecimentos(id) on delete cascade,nome text,atual numeric,meta numeric,unidade text,prazo date,cat text);
do $$declare tb text;begin for tb in select unnest(array['estabelecimentos','transacoes','estoque','funcionarios','clientes','fornecedores','cardapio','fiscal','metas'])loop execute 'alter table '||tb||' enable row level security;create policy if not exists "open" on '||tb||' for all using(true)';end loop;end$$;`;}

async function conectarSupa(){
  const url=document.getElementById('sb_url').value.trim();
  const key=document.getElementById('sb_key').value.trim();
  if(!url||!key){toast('Preencha URL e chave','error');return;}
  CFG.url=url;CFG.key=key;
  const btn=document.getElementById('btnConectar');
  btn.disabled=true;btn.innerHTML=`<i class="ti ti-loader spin"></i> Conectando...`;
  const ok=await initSupa();
  if(ok){await recarregarTudo();toast(t('conectado')+' 🎉');nav('config');}
  else{toast('Falha na conexão','error');btn.disabled=false;btn.innerHTML=`<i class="ti ti-database"></i> ${t('conectar_supabase')}`;}
}

async function recarregarTudo(){
  if(!supa) return;
  try {
    const load=async(tb,key,order='created_at')=>{
      const d=await dbSelect(tb,{},{order,asc:false});
      if(d && d.length >= 0) LOCAL[key]=d;
    };
    await Promise.all([
      load('estabelecimentos','estabelecimentos'),
      load('transacoes','transacoes'),
      load('estoque','estoque','updated_at'),
      load('funcionarios','funcionarios'),
      load('clientes','clientes'),
      load('fornecedores','fornecedores'),
      load('cardapio','cardapio'),
      load('fiscal','fiscal','venc'),
      load('metas','metas','prazo'),
    ]);
    if(LOCAL.estabelecimentos.length) EST=LOCAL.estabelecimentos[0].id;
  } catch(e) { console.error('recarregarTudo error:', e); }
}

function desconectar(){
  confirm2('Desconectar do Supabase?',()=>{
    supa=null;CFG.ok=false;CFG.url='';CFG.key='';
    saveCFG();setConnUI(false);buildDemoData();EST='e1';
    renderEstSelect();toast('Desconectado','warning');nav('dashboard');
  });
}

// ══════════════════════════════════════════
// WIZARD DE PRIMEIRO ACESSO
// ══════════════════════════════════════════
const TIPOS_EST = [
  {id:'restaurante',  icon:'ti-chef-hat',     label:'Restaurante',   desc:'Almoço, jantar, à la carte'},
  {id:'pizzaria',     icon:'ti-pizza',         label:'Pizzaria',      desc:'Delivery, balcão, salão'},
  {id:'lanchonete',   icon:'ti-sandwich',      label:'Lanchonete',    desc:'Fast food, snacks, lanches'},
  {id:'bar',          icon:'ti-beer',          label:'Bar',           desc:'Bebidas, petiscos, shows'},
  {id:'cafeteria',    icon:'ti-coffee',        label:'Cafeteria',     desc:'Café, salgados, doces'},
  {id:'padaria',      icon:'ti-bread',         label:'Padaria',       desc:'Pão, confeitaria, doces'},
  {id:'mercado',      icon:'ti-shopping-cart', label:'Mercado',       desc:'Varejo, mercearia, hortifruti'},
  {id:'salao',        icon:'ti-scissors',      label:'Salão de Beleza',desc:'Corte, estética, spa'},
  {id:'academia',     icon:'ti-barbell',       label:'Academia',      desc:'Fitness, musculação, aulas'},
  {id:'outro',        icon:'ti-building',      label:'Outro',         desc:'Qualquer tipo de negócio'},
];

const MODULOS_WIZARD = [
  {id:'financeiro',   icon:'ti-coin',          label:'Financeiro',    desc:'Receitas e despesas'},
  {id:'dre',          icon:'ti-report-analytics',label:'DRE',         desc:'Demonstrativo de resultados'},
  {id:'fluxo',        icon:'ti-arrows-exchange',label:'Fluxo de Caixa',desc:'Projeção de entradas/saídas'},
  {id:'estoque',      icon:'ti-packages',      label:'Estoque',       desc:'Controle de insumos'},
  {id:'funcionarios', icon:'ti-users',         label:'Funcionários',  desc:'Equipe e folha de pagamento'},
  {id:'clientes',     icon:'ti-address-book',  label:'Clientes',      desc:'Cadastro e fidelização'},
  {id:'fornecedores', icon:'ti-truck',         label:'Fornecedores',  desc:'Contatos e pedidos'},
  {id:'cardapio',     icon:'ti-clipboard-list',label:'Cardápio',      desc:'Itens, preços e margem'},
  {id:'fiscal',       icon:'ti-receipt-2',     label:'Fiscal',        desc:'Impostos e obrigações'},
  {id:'metas',        icon:'ti-target',        label:'Metas',         desc:'Objetivos e acompanhamento'},
  {id:'relatorios',   icon:'ti-chart-bar',     label:'Relatórios',    desc:'Análises e comparativos'},
];

let WZ = { step:1, tipo:'', nome:'', responsavel:'', moeda:'BRL', lang:'pt-BR', theme:'dark', modulos:[], cor:'#2563EB' };

const CORES = [
  {id:'blue',   hex:'#2563EB', label:'Azul'},
  {id:'green',  hex:'#16a34a', label:'Verde'},
  {id:'purple', hex:'#7c3aed', label:'Roxo'},
  {id:'red',    hex:'#dc2626', label:'Vermelho'},
  {id:'amber',  hex:'#d97706', label:'Âmbar'},
  {id:'teal',   hex:'#0891b2', label:'Turquesa'},
  {id:'pink',   hex:'#db2777', label:'Rosa'},
  {id:'slate',  hex:'#475569', label:'Cinza'},
];

function showWizard(){
  document.getElementById('app').style.display='none';
  document.getElementById('bottomNav').style.display='none';
  const wz=document.getElementById('wizard-root');
  wz.style.display='flex';
  WZ={step:1,tipo:'',nome:CFG.responsavel||'',responsavel:CFG.responsavel||'',moeda:CFG.moeda||'BRL',lang:CFG.lang||'pt-BR',theme:'light',modulos:['financeiro','estoque','relatorios','metas','fiscal'],cor:CFG.accentColor||'#2563EB'};
  renderWizard();
}

function hideWizard(){
  document.getElementById('wizard-root').style.display='none';
  document.getElementById('app').style.display='flex';
}

function renderWizard(){
  const root=document.getElementById('wizard-root');
  const steps=['Tipo de negócio','Seu perfil','Aparência','Módulos','Pronto!'];
  const pct=Math.round((WZ.step/steps.length)*100);

  const stepsBar=steps.map((s,i)=>{
    const n=i+1;
    const done=n<WZ.step, active=n===WZ.step;
    return `<div class="wz-step-item">
      <div class="wz-step-circle ${done?'done':active?'active':'idle'}">${done?'<i class="ti ti-check" style="font-size:13px"></i>':n}</div>
      <span class="wz-step-label ${active?'active':''}">${s}</span>
    </div>${n<steps.length?'<div class="wz-step-line"></div>':''}`;
  }).join('');

  root.innerHTML=`
  <div class="wz-overlay">
    <div class="wz-box">
      <div class="wz-header">
        <div class="wz-logo"><div class="sb-logo-icon" style="width:36px;height:36px"><i class="ti ti-building-store" style="font-size:20px"></i></div><div><div style="font-size:17px;font-weight:700;color:var(--text)">GestãoOS</div><div style="font-size:12px;color:var(--text-2)">Configure seu sistema</div></div></div>
        <div class="wz-progress">
          <div style="display:flex;justify-content:space-between;margin-bottom:6px">
            <span style="font-size:12px;color:var(--text-2)">Passo ${WZ.step} de ${steps.length}</span>
            <span style="font-size:12px;font-weight:600;color:var(--accent)">${pct}%</span>
          </div>
          <div class="progress"><div class="progress-fill" style="width:${pct}%;background:var(--accent);transition:width .4s"></div></div>
        </div>
      </div>
      <div class="wz-steps-bar">${stepsBar}</div>
      <div class="wz-body" id="wzBody">${renderWzStep()}</div>
      <div class="wz-footer" id="wzFooter">${renderWzFooter()}</div>
    </div>
  </div>`;
}

function renderWzStep(){
  if(WZ.step===1) return wzStep1();
  if(WZ.step===2) return wzStep2();
  if(WZ.step===3) return wzStep3();
  if(WZ.step===4) return wzStep4();
  if(WZ.step===5) return wzStep5();
  return '';
}

function wzStep1(){
  return `
  <div class="wz-step-title">Qual é o seu tipo de negócio?</div>
  <div class="wz-step-sub">Vamos adaptar o sistema para a sua realidade</div>
  <div class="wz-tipo-grid">
    ${TIPOS_EST.map(tp=>`
    <button class="wz-tipo-card ${WZ.tipo===tp.id?'sel':''}" onclick="WZ.tipo='${tp.id}';document.querySelectorAll('.wz-tipo-card').forEach(c=>c.classList.remove('sel'));this.classList.add('sel');document.getElementById('wzNextBtn').disabled=false">
      <i class="ti ${tp.icon}"></i>
      <div class="wz-tipo-name">${tp.label}</div>
      <div class="wz-tipo-desc">${tp.desc}</div>
    </button>`).join('')}
  </div>`;
}

function wzStep2(){
  return `
  <div class="wz-step-title">Dados do seu negócio</div>
  <div class="wz-step-sub">Essas informações aparecerão no sistema</div>
  <div style="max-width:420px;margin:0 auto">
    <div class="form-group mb-2">
      <label class="form-label">Nome do estabelecimento <span class="req">*</span></label>
      <input type="text" class="form-input" id="wz_nome" value="${WZ.nome}" placeholder="Ex: Pizzaria Bella, Bar do João..." oninput="WZ.nome=this.value;wzValidateStep2()" style="font-size:15px;padding:.625rem .875rem"/>
    </div>
    <div class="form-group mb-2">
      <label class="form-label">Seu nome (responsável) <span class="req">*</span></label>
      <input type="text" class="form-input" id="wz_resp" value="${WZ.responsavel}" placeholder="Seu nome completo" oninput="WZ.responsavel=this.value;wzValidateStep2()"/>
    </div>
    <div class="form-row cols-2">
      <div class="form-group">
        <label class="form-label">Idioma</label>
        <select class="form-select" id="wz_lang" onchange="WZ.lang=this.value">
          <option value="pt-BR" ${WZ.lang==='pt-BR'?'selected':''}>🇧🇷 Português (BR)</option>
          <option value="en"    ${WZ.lang==='en'?'selected':''}>🇺🇸 English</option>
          <option value="es"    ${WZ.lang==='es'?'selected':''}>🇪🇸 Español</option>
          <option value="fr"    ${WZ.lang==='fr'?'selected':''}>🇫🇷 Français</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Moeda</label>
        <select class="form-select" id="wz_moeda" onchange="WZ.moeda=this.value">
          <option value="BRL" ${WZ.moeda==='BRL'?'selected':''}>R$ Real (BRL)</option>
          <option value="USD" ${WZ.moeda==='USD'?'selected':''}>$ Dólar (USD)</option>
          <option value="EUR" ${WZ.moeda==='EUR'?'selected':''}>€ Euro (EUR)</option>
        </select>
      </div>
    </div>
  </div>`;
}

function wzStep3(){
  return `
  <div class="wz-step-title">Como você prefere o visual?</div>
  <div class="wz-step-sub">Escolha o tema e a cor principal do sistema</div>
  <div style="max-width:480px;margin:0 auto">
    <div style="margin-bottom:1.5rem">
      <div class="form-label" style="margin-bottom:.75rem">Tema</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px">
        ${[['dark','ti-moon','Escuro'],['light','ti-sun','Claro'],['system','ti-device-laptop','Sistema']].map(([v,ic,lb])=>`
        <button onclick="WZ.theme='${v}';document.querySelectorAll('.wz-tema-btn').forEach(b=>b.classList.remove('sel'));this.classList.add('sel')" class="wz-tema-btn ${WZ.theme===v?'sel':''}" style="display:flex;flex-direction:column;align-items:center;gap:8px;padding:1rem;border:2px solid ${WZ.theme===v?'var(--accent)':'var(--border)'};border-radius:var(--radius-lg);background:${WZ.theme===v?'var(--accent-light)':'var(--surface)'};cursor:pointer;transition:all .15s">
          <i class="ti ${ic}" style="font-size:26px;color:${WZ.theme===v?'var(--accent)':'var(--text-2)'}"></i>
          <span style="font-size:13px;font-weight:500;color:${WZ.theme===v?'var(--accent)':'var(--text-2)'}">${lb}</span>
        </button>`).join('')}
      </div>
    </div>
    <div>
      <div class="form-label" style="margin-bottom:.75rem">Cor de destaque</div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px">
        ${CORES.map(c=>`
        <button onclick="WZ.cor='${c.hex}';document.querySelectorAll('.wz-cor-btn').forEach(b=>b.classList.remove('sel'));this.classList.add('sel');document.documentElement.style.setProperty('--accent','${c.hex}')" class="wz-cor-btn ${WZ.cor===c.hex?'sel':''}" style="display:flex;flex-direction:column;align-items:center;gap:6px;padding:.75rem .5rem;border:2px solid ${WZ.cor===c.hex?c.hex:'var(--border)'};border-radius:var(--radius-lg);background:${WZ.cor===c.hex?c.hex+'18':'var(--surface)'};cursor:pointer;transition:all .15s">
          <div style="width:28px;height:28px;border-radius:50%;background:${c.hex}"></div>
          <span style="font-size:11px;font-weight:500;color:var(--text-2)">${c.label}</span>
        </button>`).join('')}
      </div>
    </div>
  </div>`;
}

function wzStep4(){
  // Pre-select relevant modules based on type
  const autoMods = {
    restaurante:['financeiro','dre','estoque','funcionarios','clientes','cardapio','fiscal','metas','relatorios'],
    pizzaria:   ['financeiro','dre','estoque','funcionarios','clientes','cardapio','fiscal','metas','relatorios'],
    lanchonete: ['financeiro','estoque','funcionarios','cardapio','metas','relatorios'],
    bar:        ['financeiro','estoque','funcionarios','cardapio','fiscal','relatorios'],
    cafeteria:  ['financeiro','estoque','funcionarios','cardapio','metas','relatorios'],
    padaria:    ['financeiro','estoque','funcionarios','cardapio','fiscal','relatorios'],
    mercado:    ['financeiro','dre','estoque','funcionarios','clientes','fornecedores','fiscal','metas','relatorios'],
    salao:      ['financeiro','funcionarios','clientes','agenda','metas','relatorios'],
    academia:   ['financeiro','funcionarios','clientes','metas','relatorios'],
    outro:      ['financeiro','estoque','funcionarios','clientes','metas','relatorios'],
  };
  if(WZ.modulos.length===0 || WZ._autoSet !== WZ.tipo){
    WZ.modulos = autoMods[WZ.tipo] || ['financeiro','estoque','metas','relatorios'];
    WZ._autoSet = WZ.tipo;
  }
  return `
  <div class="wz-step-title">Quais módulos você precisa?</div>
  <div class="wz-step-sub">Sugerimos os mais úteis para o seu tipo de negócio. Você pode mudar depois.</div>
  <div class="wz-mod-grid">
    ${MODULOS_WIZARD.map(m=>{
      const sel=WZ.modulos.includes(m.id);
      return `<button class="wz-mod-card ${sel?'sel':''}" onclick="wzToggleMod('${m.id}',this)">
        <div class="wz-mod-check ${sel?'checked':''}" id="wzchk_${m.id}"><i class="ti ti-check" style="font-size:11px;color:#fff"></i></div>
        <i class="ti ${m.icon}" style="font-size:20px;margin-bottom:4px;color:${sel?'var(--accent)':'var(--text-3)'}"></i>
        <div style="font-size:13px;font-weight:500">${m.label}</div>
        <div style="font-size:11px;color:var(--text-3);margin-top:2px">${m.desc}</div>
      </button>`;
    }).join('')}
  </div>`;
}

function wzToggleMod(id, btn){
  const i=WZ.modulos.indexOf(id);
  if(i>-1) WZ.modulos.splice(i,1); else WZ.modulos.push(id);
  const sel=WZ.modulos.includes(id);
  btn.classList.toggle('sel',sel);
  const chk=document.getElementById('wzchk_'+id);
  if(chk)chk.classList.toggle('checked',sel);
  const icon=btn.querySelector('i.ti');
  if(icon)icon.style.color=sel?'var(--accent)':'var(--text-3)';
}

function wzStep5(){
  const tipo=TIPOS_EST.find(x=>x.id===WZ.tipo)||TIPOS_EST[TIPOS_EST.length-1];
  const moedaLabel={BRL:'R$ Real',USD:'$ Dólar',EUR:'€ Euro'}[WZ.moeda];
  const langLabel={'pt-BR':'Português (BR)','en':'English','es':'Español','fr':'Français'}[WZ.lang];
  const temaLabel={dark:'Escuro',light:'Claro',system:'Sistema'}[WZ.theme];
  const corObj=CORES.find(c=>c.hex===WZ.cor)||CORES[0];
  return `
  <div class="wz-step-title">Tudo pronto! 🎉</div>
  <div class="wz-step-sub">Confira o resumo antes de entrar no sistema</div>
  <div style="max-width:440px;margin:0 auto">
    <div class="wz-summary-card">
      <div class="wz-sum-header">
        <div class="wz-sum-icon" style="background:var(--accent-light)"><i class="ti ${tipo.icon}" style="font-size:24px;color:var(--accent)"></i></div>
        <div>
          <div style="font-size:18px;font-weight:700">${WZ.nome||'Meu Negócio'}</div>
          <div style="font-size:13px;color:var(--text-2)">${tipo.label} · ${WZ.responsavel||'Admin'}</div>
        </div>
      </div>
      <div class="wz-sum-rows">
        <div class="wz-sum-row"><span><i class="ti ti-language" style="margin-right:6px"></i>Idioma</span><strong>${langLabel}</strong></div>
        <div class="wz-sum-row"><span><i class="ti ti-coin" style="margin-right:6px"></i>Moeda</span><strong>${moedaLabel}</strong></div>
        <div class="wz-sum-row"><span><i class="ti ti-palette" style="margin-right:6px"></i>Tema / Cor</span><div style="display:flex;align-items:center;gap:8px"><strong>${temaLabel}</strong><div style="width:16px;height:16px;border-radius:50%;background:${corObj.hex}"></div></div></div>
        <div class="wz-sum-row"><span><i class="ti ti-layout-grid" style="margin-right:6px"></i>Módulos ativos</span><strong>${WZ.modulos.length} de ${MODULOS_WIZARD.length}</strong></div>
      </div>
    </div>
    <div style="background:var(--bg);border-radius:var(--radius-lg);padding:.875rem 1rem;font-size:12px;color:var(--text-2);margin-top:1rem;display:flex;gap:10px;align-items:flex-start">
      <i class="ti ti-info-circle" style="font-size:16px;flex-shrink:0;margin-top:1px;color:var(--accent)"></i>
      <span>Você pode alterar tudo isso depois em <strong>Configurações</strong>. Também é possível adicionar mais estabelecimentos a qualquer momento.</span>
    </div>
  </div>`;
}

function renderWzFooter(){
  const isLast=WZ.step===5;
  const isFirst=WZ.step===1;
  const canNext=WZ.step===1?WZ.tipo!=='':WZ.step===2?(WZ.nome.trim()!==''&&WZ.responsavel.trim()!==''):true;
  return `
  <div style="display:flex;align-items:center;justify-content:space-between;width:100%">
    <button class="btn btn-secondary" onclick="wzBack()" ${isFirst?'style="visibility:hidden"':''}>
      <i class="ti ti-arrow-left"></i> Voltar
    </button>
    <button class="btn btn-primary" id="wzNextBtn" onclick="wzNext()" ${!canNext&&WZ.step<3?'disabled':''} style="min-width:140px">
      ${isLast?`<i class="ti ti-rocket"></i> Entrar no sistema`:`Próximo <i class="ti ti-arrow-right"></i>`}
    </button>
  </div>`;
}

function wzValidateStep2(){
  const btn=document.getElementById('wzNextBtn');
  if(btn) btn.disabled=!(WZ.nome.trim()&&WZ.responsavel.trim());
}

function wzNext(){
  if(WZ.step===2){
    WZ.nome=(document.getElementById('wz_nome')?.value||'').trim()||WZ.nome;
    WZ.responsavel=(document.getElementById('wz_resp')?.value||'').trim()||WZ.responsavel;
    WZ.lang=document.getElementById('wz_lang')?.value||WZ.lang;
    WZ.moeda=document.getElementById('wz_moeda')?.value||WZ.moeda;
    if(!WZ.nome||!WZ.responsavel){toast('Preencha nome e responsável','error');return;}
  }
  if(WZ.step===5){ wzFinish(); return; }
  WZ.step++;
  if(WZ.step===3) applyTheme(WZ.theme);
  renderWizard();
}

function wzBack(){
  if(WZ.step<=1)return;
  WZ.step--;
  renderWizard();
}

function wzFinish(){
  // Apply all wizard settings to CFG
  CFG.nome = WZ.nome;
  CFG.responsavel = WZ.responsavel;
  CFG.tipo = WZ.tipo;
  CFG.moeda = WZ.moeda;
  CFG.lang = WZ.lang;
  CFG.theme = WZ.theme;
  CFG.accentColor = WZ.cor;
  // Always include dashboard + config in modulos
  CFG.modulos = ['dashboard', ...WZ.modulos.filter(m=>m!=='dashboard'), 'config'];
  CFG.firstRun = false;
  saveCFG();

  // Apply accent color
  document.documentElement.style.setProperty('--accent', WZ.cor);
  document.documentElement.style.setProperty('--accent-dark', WZ.cor);

  // Build local demo data with user's establishment
  buildDemoData();
  LOCAL.estabelecimentos[0].nome = WZ.nome;
  LOCAL.estabelecimentos[0].tipo = WZ.tipo;

  applyTheme(CFG.theme);
  // Apply accent color properly
  document.documentElement.style.setProperty('--accent', WZ.cor);
  document.documentElement.style.setProperty('--accent-dark', WZ.cor);
  const isDark2 = document.body.getAttribute('data-theme')==='dark';
  document.documentElement.style.setProperty('--accent-light', isDark2 ? WZ.cor+'30' : WZ.cor+'18');
  document.documentElement.style.setProperty('--accent-text', isDark2 ? WZ.cor+'dd' : WZ.cor);

  // Create first establishment in Supabase if logged in
  if(supa && AUTH_USER) {
    dbInsert('estabelecimentos', { owner_id: AUTH_USER.id, nome: WZ.nome, tipo: WZ.tipo }).then(saved => {
      if(saved) { LOCAL.estabelecimentos = [saved]; EST = saved.id; renderEstSelect(); }
    });
  } else {
    LOCAL.estabelecimentos[0].nome = WZ.nome;
    LOCAL.estabelecimentos[0].tipo = WZ.tipo;
  }

  applyConfig();
  renderSidebar();
  renderEstSelect();
  hideWizard();
  document.getElementById('bottomNav').style.display='flex';
  toast('Bem-vindo ao GestãoOS! 🎉','success',4000);
  nav('dashboard');
}

// ══════════════════════════════════════════
// INIT
// ══════════════════════════════════════════
async function start(){
  loadCFG();
  applyTheme(CFG.theme || 'light');

  if(CFG.accentColor){
    document.documentElement.style.setProperty('--accent', CFG.accentColor);
    document.documentElement.style.setProperty('--accent-dark', CFG.accentColor);
    const isDark = document.body.getAttribute('data-theme')==='dark';
    document.documentElement.style.setProperty('--accent-light', isDark ? CFG.accentColor+'30' : CFG.accentColor+'18');
    document.documentElement.style.setProperty('--accent-text', isDark ? CFG.accentColor+'dd' : CFG.accentColor);
  }

  buildDemoData();
  applyConfig();
  renderSidebar();
  renderEstSelect();

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',()=>{
    if(CFG.theme==='system') applyTheme('system');
  });

  // Always init Supabase first (credentials are hardcoded)
  if(CFG.url && CFG.key) {
    try {
      const ok = await initSupa();
      if(ok) {
        const session = await getSession();
        if(session) {
          // User already logged in — restore session
          document.getElementById('bottomNav').style.display='flex';
          if(CFG.firstRun !== false) {
            showWizard();
            recarregarTudo().then(()=>renderEstSelect());
          } else {
            recarregarTudo().then(()=>{renderEstSelect();nav('dashboard');});
            nav('dashboard');
          }
          return;
        }
      }
    } catch(e) { console.warn('Supabase init failed:', e); }
  }

  // No session — show auth screen
  showAuthScreen('login');
}

start();
