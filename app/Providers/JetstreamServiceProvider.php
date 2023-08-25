<?php

namespace App\Providers;

use App\Actions\Jetstream\AddTeamMember;
use App\Actions\Jetstream\CreateTeam;
use App\Actions\Jetstream\DeleteTeam;
use App\Actions\Jetstream\DeleteUser;
use App\Actions\Jetstream\InviteTeamMember;
use App\Actions\Jetstream\RemoveTeamMember;
use App\Actions\Jetstream\UpdateTeamName;
use Illuminate\Http\Request;
use Illuminate\Support\ServiceProvider;
use Laravel\Jetstream\Jetstream;

class JetstreamServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->configurePermissions();

        Jetstream::createTeamsUsing(CreateTeam::class);
        Jetstream::updateTeamNamesUsing(UpdateTeamName::class);
        Jetstream::addTeamMembersUsing(AddTeamMember::class);
        Jetstream::inviteTeamMembersUsing(InviteTeamMember::class);
        Jetstream::removeTeamMembersUsing(RemoveTeamMember::class);
        Jetstream::deleteTeamsUsing(DeleteTeam::class);
        Jetstream::deleteUsersUsing(DeleteUser::class);

        Jetstream::inertia()->whenRendering(
            'Teams/Show',
            function (Request $request, array $data){
                return array_merge_recursive( $data, 
                    ['permissions' => ['canUpdateSalePercentage' => true]]);
            }
        );
    }

    /**
     * Configure the roles and permissions that are available within the application.
     *
     * @return void
     */
    protected function configurePermissions()
    {
        Jetstream::defaultApiTokenPermissions(['read']);

        Jetstream::role('admin', 'Administrador', [
            'create',
            'read',
            'update',
            'delete',
            'agency.manage'
        ])->description('Administradores de Freetraveler.');

        Jetstream::role('agency', 'Director de Agencia', [
            'read',
            'create',
            'update',
            'agency.manage'
        ])->description('Agencia, tienen los permisos de leer, crear y actualizar.');

        Jetstream::role('seller', 'Vendedor', [
            'read',
            'create',
            'update',
        ])->description('Vendedor, tienen los permisos de leer, crear y actualizar.');

        Jetstream::role('client', 'Cliente', [
            'read',
            'create',
        ])->description('Cliente, solo puede leer y crear');
    }
}
