/**
 * Extend the base Actor document by defining a custom roll data structure which is ideal for the Simple system.
 * @extends {Actor}
 */
export class MetanthropesActor extends Actor {

	/** @override */
	prepareData() {
		// Prepare data for the actor. Calling the super version of this executes
		// the following, in order: data reset (to clear active effects),
		// prepareBaseData(), prepareEmbeddedDocuments() (including active effects),
		// prepareDerivedData().
		super.prepareData();
	}

	/** @override */
	prepareBaseData() {
		// Data modifications in this step occur before processing embedded
		// documents or derived data.
		//todo: qp preparing for template switch
		// for (let ch of Object.values(this.charstats)) {
		// 	for (let st of Object.values(this.ch.charstats)) {
		// 		st.base = Math.sum(st.initial, st.progressed, ch.initial, ch.progressed);
		// console.log(st.base);
		// 	}
		// }
		//todo: as poyme edw tha ftiaksw to base attribute poy tha einai to initial+progressed
	}

	/**
	 * @override
	 * Augment the basic actor data with additional dynamic data. Typically,
	 * you'll want to handle most of your calculated/derived data in this step.
	 * Data calculated in this step should generally not exist in template.json
	 * (such as ability modifiers rather than ability scores) and should be
	 * available both inside and outside of character sheets (such as if an actor
	 * is queried and has a roll executed directly from it).
	 * qp notes
	 * ==========
	 * this is where we add the body etc to the stats
	 * here we should also add the modifiers see above
	 * copilot go?
	 * 
	 * todo enw edw tha einai as poyme to base + conditions + buffs
	 * 
	 */
	prepareDerivedData() {
		const actorData = this;
		const systemData = actorData.system;
		const flags = actorData.flags.metanthropes || {};

		// Make separate methods for each Actor type (character, npc, etc.) to keep
		// things organized.
		this._prepareCharacterData(actorData);
		this._prepareNpcData(actorData);
		//todo: qp preparing for template switch
		//this._prepareHumanData(actorData);
		//this._prepareMetanthropeData(actorData);
		//this._prepareProtagonistData(actorData);
		//this._prepareMetaTherionData(actorData);
		//this._prepareAnimalData(actorData);
		//this._prepareArtificialData(actorData);

	}

	/**
	 * Prepare Character type specific data
	 */
	_prepareCharacterData(actorData) {
		if (actorData.type !== 'character') return;
		//todo: qp preparing for template switch
		// should this not start with a capital P?
		//if (actorData.type !== 'Protagonist') return;
		// Make modifications to data here. For example:
		const systemData = actorData.system;
		// Loop through ability scores, and add their modifiers to our sheet output.
		//todo: qp preparing for template switch
		// I need to figure out how to make it so that here calculates the .current as the + body etc
		// for (let [key, ability] of Object.entries(systemData.abilities)) {
		//
		//
		//the below is broken
		for (let [key, stat] of Object.entries(systemData.stats)) {
		// Calculate the modifier using d20 rules. qp this could be how to add bodyetc to stats
		// ability.mod = Math.floor((ability.value - 10) / 2);
		//den to exei parei mallon kati allo paizei
		// edw mallon einai poy to xanei me kathe anoigma tou cs sto client kai allazoune ta noumera
			stat.qp = Math.sum(stats.key.value, characteristics.body.value);
			console.log(stat.qp);
	}
}

/**
 * Prepare NPC type specific data.
 */
_prepareNpcData(actorData) {
	if (actorData.type !== 'npc') return;
	//todo: qp preparing for template switch
	//if (actorData.type !== 'Human') return;
	//if (actorData.type !== 'Metanthrope') return;
	//if (actorData.type !== 'Animal') return;
	//if (actorData.type !== 'Artificial') return;
	//if (actorData.type !== 'MetaTherion') return;

	// should I nest these --- together? what does this do exactly?

	// Make modifications to data here. For example:
	const systemData = actorData.system;
	systemData.xp = (systemData.cr * systemData.cr) * 100;
}

/**
 * Override getRollData() that's supplied to rolls.
 */
getRollData() {
	const data = super.getRollData();

	// Prepare character roll data.
	//todo: qp preparing for template switch
	//this._prepareHumanRollData(data);
	//this._prepareMetanthropeRollData(data);
	//this._prepareProtagonistRollData(data);
	//this._prepareMetaTherionRollData(data);
	//this._prepareAnimalRollData(data);
	//this._prepareArtificialRollData(data);

	//todo: I need to do the _getCharacterRollData changes below
	this._getCharacterRollData(data);
	this._getNpcRollData(data);

	return data;
}

/**
 * Prepare character roll data.
 */
_getCharacterRollData(data) {
	if (this.type !== 'character') return;

	// Copy the ability scores to the top level, so that rolls can use
	// formulas like `@str.mod + 4`.
	//todo: qp preparing for template switch - or not? maybe this section is not needed????
	//? is this where the numbering bug is coming from?
	//! test this
	if (data.stats) {
		for (let [k, v] of Object.entries(data.stats)) {
			data[k] = foundry.utils.deepClone(v);
		}
	}

	// Add level for easier access, or fall back to 0.
	if (data.attributes.level) {
		data.lvl = data.attributes.level.value ?? 0;
	}
}

/**
 * Prepare NPC roll data.
 */
_getNpcRollData(data) {
	if (this.type !== 'npc') return;

	// Process additional NPC data here.
}

}