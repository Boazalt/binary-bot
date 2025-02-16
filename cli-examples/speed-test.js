ivar token = 'Replace with your own token';

console.log('Starting bot...');

Bot.init(token, {
  symbol: 'R_100',
  candleInterval: 60,
  contractTypes: ['CALL', 'PUT'],
});

while (true) {
  Bot.start({
    amount: 1,
    currency: 'USD',
    duration: 2,
    duration_unit: 'h',
  });

  console.log('Preparing Proposals');

  watch('before');

  Bot.purchase('CALL');

  console.log('Purchased:', 'CALL');

  while(watch('during')) {
    if (Bot.isSellAvailable()) {
      Bot.sellAtMarket()
      console.log('Contract Sold')
    }
  }

  console.log('Purchase finished:', Bot.readDetails(1));

  sleep(1) // Prevent max sell alert because of trading too fast
}
<block type="controls_if" id="check_digit_9">
  <mutation else="1"></mutation>
  <value name="IF0">
    <block type="logic_compare" id="compare_digit_9">
      <field name="OP">EQ</field>
      <value name="A">
        <block type="math_number" id="digit_9">
          <field name="NUM">9</field>
        </block>
      </value>
      <value name="B">
        <block type="variables_get" id="detected_digit">
          <field name="VAR">digit</field>
        </block>
      </value>
    </block>
  </value>
  <statement name="DO0">
    <block type="text_print" id="execute_digit_9">
      <value name="TEXT">
        <shadow type="text" id="text_to_print">
          <field name="TEXT">Executing digit 9</field>
        </shadow>
      </value>
    </block>
  </statement>
</block><block type="controls_if" id="check_digit_9">
  <mutation else="1"></mutation>
  <value name="IF0">
    <block type="logic_compare" id="compare_digit_9">
      <field name="OP">EQ</field>
      <value name="A">
        <block type="math_number" id="digit_9">
          <field name="NUM">9</field>
        </block>
      </value>
      <value name="B">
        <block type="variables_get" id="detected_digit">
          <field name="VAR">digit</field>
        </block>
      </value>
    </block>
  </value>
  <statement name="DO0">
    <block type="text_print" id="execute_digit_9">
      <value name="TEXT">
        <shadow type="text" id="text_to_print">
          <field name="TEXT">Executing digit 9</field>
        </shadow>
      </value>
    </block>
  </statement>
</block>
