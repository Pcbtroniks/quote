<?php

namespace App\Mail;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;

class QuoteCreated extends Mailable
{
    use Queueable, SerializesModels;

    public $subject = 'Nueva cotización';

    public $quote;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($quote)
    {
        $this->quote = $quote;
        $this->subject .= ' - ' . $this->makeFolio();
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('Emails.Quotes.request-coupon');
    }

    private function makeFolio()
    {
        $agency = substr($this->quote->team->name, 0, 3);
        $id = $this->quote->id;
        return $agency . '-' . $id . '-' . date('d') . date('m') . date('Y');
    } 
}
