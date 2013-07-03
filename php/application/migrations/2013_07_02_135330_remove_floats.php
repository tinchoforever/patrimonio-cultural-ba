<?php

class Remove_Floats {

	/**
	 * Make changes to the database.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('buildings', function($table) {

			$table->drop_column('lat');
			$table->drop_column('lng');

        });
		Schema::table('buildings', function($table) {

			$table->decimal('lat',10, 7);
			$table->decimal('lng',10, 7);

        });
	}

	/**
	 * Revert the changes to the database.
	 *
	 * @return void
	 */
	public function down()
	{
		//
	}

}